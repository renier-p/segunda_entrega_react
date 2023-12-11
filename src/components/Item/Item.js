import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="ml-4 flex items-center flex-col rounded-lg overflow-hidden  object-cover h-100 w-full gap-2 px-2 py-5 justify-center item-shadow">
      <div className="items-center card-item">
        <img
          src={img}
          alt={name}
          className="object contain max-w-full rounded-lg items-center pb-2  h-60"
        />
      </div>

      <section>
        <h2 className="ItemHeader font-bold">{name}</h2>
        <p className="Info">Precio: ${price}</p>
        <p className="=Info pb-2">Stock Disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 p-2 rounded-lg transition duration-200 my-4"
          to={`/item/${id}`}
        >
          Ver Detalle
        </Link>
      </footer>
    </div>
  );
};

export default Item;
