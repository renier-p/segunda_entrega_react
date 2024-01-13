import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalPrice: 0,
  totalQuantity: 0,
  getCartItems: () => [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalPrice = cart.reduce(
    (prev, act) => prev + act.quantity * act.Precio,
    0
  );
  const totalQuantity = () =>
    cart.reduce(
      (acumulador, productsActual) => acumulador + productsActual.quantity,
      0
    );

  const getCartItems = () => {
    return cart;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalPrice,
        totalQuantity,
        getCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
