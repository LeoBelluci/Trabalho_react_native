import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#999"
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={22} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={22} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-cart" size={22} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="tickets" // ⚠️ TEM QUE BATER COM O ARQUIVO
        options={{
          title: "Bilhetes",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ticket-outline" size={22} color={color} />
          )
        }}
      />

    </Tabs>
  );
}