import "../styles/global.css"
import { SplashScreen, Stack } from "expo-router"
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato"
import { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

function AppContent() {
  const insets = useSafeAreaInsets()
  const queryClient = new QueryClient()

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(public)" />
          <Stack.Screen name="(private)" />
        </Stack>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) return null

  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  )
}
