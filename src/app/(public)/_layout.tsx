import { Redirect, Stack } from "expo-router"

export default function PublicLayout() {
  const userData = null

  if (userData) {
    return <Redirect href={"/(private)/home"} />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}
