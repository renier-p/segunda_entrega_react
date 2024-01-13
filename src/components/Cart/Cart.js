import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../Context/CartContext";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice } =
    useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <>
        <div className="mt-32 flex justify-center items-center">
          <h1 className="pb-5 font-bold text-lg">No hay items en el carrito</h1>
        </div>
        <div>
          <Link
            to="/"
            className="flex justify-center items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-6 ml-2"
          >
            Productos
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="mt-32 flex">
      <div className="w-1/2 ml-32 ">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} products={p} />
        ))}
        <div className="flex mt-3 justify-center items-center">
          <h3>Total: ${totalPrice}</h3>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => clearCart()}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-4 ml-2"
          >
            Limpiar carrito
          </button>
        </div>
      </div>
      <div className="w-1/2 mt-10">
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
