import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({
  id,
  Nombre,
  Img,
  Categoria,
  Descripcion,
  Precio,
  Stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      Nombre,
      Precio,
      Categoria,
      Descripcion,
      Img,
    };
    addItem(item, quantity);
  };

  return (
    <div className="detail-item">
      <article className="flex items-center flex-col max-w-screen-xl px-6 overflow-hidden ml-4 h-100 w-full text-center">
        <picture>
          <img className="object-contain h-60" src={Img} alt={Descripcion} />
        </picture>
        <section className="pb-3">
          <h2 className="font-bold">{Nombre}</h2>
          <p>Categoria: {Categoria}</p>
          <p>Descripción: {Descripcion}</p>
          <p>Precio: ${Precio}</p>
        </section>
        <footer className="pb-6">
          {quantityAdded > 0 ? (
            <Link
              to="/cart"
              className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ml-2"
            >
              Terminar Compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={Stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </article>
    </div>
  );
};

export default ItemDetail;
