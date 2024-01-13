import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartItem = ({ products }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center justify-center mt-5">
      <picture>
        <img
          src={products.Img}
          alt={products.Nombre}
          className="object-contain h-40 w-40 mt-3"
        />
      </picture>
      <div className=" ml-4">
        <h2>{products.Nombre}</h2>

        <p>Cantidad: {products.quantity}</p>
        <p>Subtotal: ${products.quantity * products.Precio}</p>
        <button
          className="py-1.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-4 ml-"
          onClick={() => removeItem(products.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
