import AsyncStorage from "@react-native-async-storage/async-storage"
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { Platform } from "react-native"

const getBaseURL = () => {
  return "http://192.168.15.4:4001"
  /*return Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  })*/
}

export const baseURL = getBaseURL()

type QueueItem = {
  resolve: (token: string) => void
  reject: (error?: unknown) => void
}

export class FluxorApiClient {
  private instance: AxiosInstance
  private isRefreshing = false
  private failedQueue: QueueItem[] = []

  constructor() {
    this.instance = axios.create({
      baseURL,
    })

    this.setupInterceptors()
  }

  getInstance() {
    return this.instance
  }

  private processQueue(error: unknown, token: string | null = null) {
    this.failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error)
      } else {
        prom.resolve(token as string)
      }
    })

    this.failedQueue = []
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem("fluxor-auth")

        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData)

          if (token) {
            config.headers = config.headers || {}
            config.headers.Authorization = `Bearer ${token}`
          }
        }

        return config
      },
      (error) => Promise.reject(error),
    )

    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest: AxiosRequestConfig & { _retry?: boolean } =
          error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                resolve: (token: string) => {
                  originalRequest.headers = originalRequest.headers || {}
                  originalRequest.headers.Authorization = `Bearer ${token}`
                  resolve(this.instance(originalRequest))
                },
                reject,
              })
            })
          }

          originalRequest._retry = true
          this.isRefreshing = true

          try {
            const userData = await AsyncStorage.getItem("fluxor-auth")

            if (!userData) throw new Error("Usuário não autenticado")

            const parsed = JSON.parse(userData)

            const refreshToken = parsed.state?.refreshToken
            if (!refreshToken) throw new Error("Refresh token não encontrado")

            const { data } = await this.instance.post("/auth/refresh", {
              refreshToken,
            })

            parsed.state.token = data.token
            parsed.state.refreshToken = data.refreshToken

            await AsyncStorage.setItem("fluxor-auth", JSON.stringify(parsed))

            this.processQueue(null, data.token)

            originalRequest.headers = originalRequest.headers || {}
            originalRequest.headers.Authorization = `Bearer ${data.token}`

            return this.instance(originalRequest)
          } catch (err) {
            this.processQueue(err, null)
            return Promise.reject(
              new Error("Sessão expirada, faça login novamente."),
            )
          } finally {
            this.isRefreshing = false
          }
        }

        if (error.response?.data?.message) {
          return Promise.reject(new Error(error.response.data.message))
        }

        return Promise.reject(new Error("Falha na requisição"))
      },
    )
  }

  private async handleUnauthorized() {
    //delete this.instance.defaults.headers.common.Authorization
  }
}

export const fluxorApiClient = new FluxorApiClient().getInstance()
