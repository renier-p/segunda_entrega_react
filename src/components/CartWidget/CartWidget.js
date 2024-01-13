import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import cart from "../../assets/shopping-cart.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const [cartQuantity, setCartQuantity] = useState(totalQuantity);

  useEffect(() => {
    setCartQuantity(totalQuantity);
  }, [totalQuantity]);

  return (
    <div className="flex">
      <Link to="/cart" className={cartQuantity > 0 ? "CartWidget" : "hidden"}>
        <button
          type="button"
          className="flex gap-2 items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-2"
        >
          <img className="flex" width={"20px"} src={cart} alt="cart-widget" />
          <span className="">{cartQuantity}</span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
