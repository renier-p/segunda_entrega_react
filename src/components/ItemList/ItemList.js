import Item from "../Item/Item";
import { toCapital } from "../helper/toCapital";

const ItemList = ({ products, titulo }) => {
  const tituloCapitalizado = titulo ? toCapital(titulo) : "";
  return (
    <div className="max-w-screen-xl px-6 mx-auto">
      <h2 className="text-2xl font-bold text-center">{tituloCapitalizado}</h2>
      <div className=" grid grid-cols-3 gap-4 py-2">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
