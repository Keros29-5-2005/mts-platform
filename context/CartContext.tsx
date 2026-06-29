"use client";

import type { Product } from "@/components/types/product";
import {
createContext,
useContext,
useState,
ReactNode,
} from "react";

type CartItem = {
product: Product;
quantity: number;
};

type CartContextType = {
cartItems: CartItem[];
count: number;
addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(
undefined
);

export function CartProvider({
children,
}: {
children: ReactNode;
}) {
const [cartItems, setCartItems] = useState<CartItem[]>([]);

const addToCart = (product: Product) => {
setCartItems((prev) => {
const existingItem = prev.find(
(item) => item.product.id === product.id
);


  if (existingItem) {
    return prev.map((item) =>
      item.product.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }

  return [
    ...prev,
    {
      product,
      quantity: 1,
    },
  ];
});


};

const count = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

return (
<CartContext.Provider
value={{
cartItems,
count,
addToCart,
}}
>
{children}
</CartContext.Provider>
);
}

export function useCart() {
const context = useContext(CartContext);

if (!context) {
throw new Error(
"useCart must be used within CartProvider"
);
}

return context;
}
