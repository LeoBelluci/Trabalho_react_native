
import { createContext, useContext, useState } from "react";
import { Event } from "../types/event";

type CartContextType = {
  cart: Event[];
  tickets: Event[];
  addToCart: (event: Event) => void;
  removeFromCart: (id: string) => void;
  finalizarCompra: () => void;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: any) {

  const [cart, setCart] = useState<Event[]>([]);
  const [tickets, setTickets] = useState<Event[]>([]);

  // 🛒 adicionar no carrinho
  function addToCart(event: Event) {
    setCart((prev) => [...prev, event]);
  }

  // 🗑️ remover do carrinho
  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // 🎟️ finalizar compra → vira bilhete
  function finalizarCompra() {
    setTickets((prev) => [...prev, ...cart]);
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        tickets,
        addToCart,
        removeFromCart,
        finalizarCompra
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

