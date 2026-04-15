import { Stack } from "expo-router";
import { CartProvider } from "../contexts/CartContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider> 
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CartProvider>
    </SafeAreaProvider>
  );
}