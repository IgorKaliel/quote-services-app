import { create } from "zustand"
import { UserInterface } from "../interface/user"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface SetSessionProps {
  user: UserInterface
  token: string
  refreshToken: string
}

interface UpdateTokensProps {
  token: string
  refreshToken: string
}

export interface UserStore {
  user: UserInterface | null
  token: string | null
  refreshToken: string | null

  setSession: (sessionData: SetSessionProps) => void
  logout: () => void
  updateTokens: (updateTokensData: UpdateTokensProps) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,

      logout: () =>
        set({
          user: null,
          token: null,
          refreshToken: null,
        }),
      setSession: (sessionData) => set({ ...sessionData }),
      updateTokens: (updateTokensData) => set({ ...updateTokensData }),
    }),
    { name: "fluxor-auth", storage: createJSONStorage(() => AsyncStorage) },
  ),
)
