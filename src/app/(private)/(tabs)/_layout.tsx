import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors["purple-base"],
        tabBarStyle: {
          height: 84,
          paddingTop: 8,
          paddingBottom: 6,
        },
        tabBarItemStyle: {
          paddingVertical: 2,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "PEDIDOS",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="file-tray-full-outline" size={25} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="clients"
        options={{
          title: "CLIENTES",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="people-outline" size={25} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "SUPORTE",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <Ionicons
              color={color}
              name="chatbubble-ellipses-outline"
              size={25}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "PERFIL",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="person-circle-outline" size={25} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 4,
          },
        }}
      />
    </Tabs>
  )
}
