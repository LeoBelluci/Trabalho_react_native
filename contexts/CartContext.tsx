import { createContext, useContext, useState } from "react";
import { Event } from "../types/event";

type CartContextType = {
  cart: Event[];
  addToCart: (event: Event) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<Event[]>([]);

  function addToCart(event: Event) {
    setCart((prev) => [...prev, event]);
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}