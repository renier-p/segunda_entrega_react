import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div className="detail-item my-24">
      <article className="flex items-center flex-col max-w-screen-xl px-6 overflow-hidden ml-4 h-100 w-full text-center">
        <picture>
          <img className="object-contain h-60" src={img} alt={description} />
        </picture>
        <section>
          <h2 className="font-bold">{name}</h2>
          <p>Categoria: {category}</p>
          <p>Descripción: {description}</p>
          <p>Precio: ${price}</p>
        </section>
        <footer className="pb-4">
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={(quantity) => console.log("Cantidad Agregada", quantity)}
          />
        </footer>
      </article>
    </div>
  );
};

export default ItemDetail;
