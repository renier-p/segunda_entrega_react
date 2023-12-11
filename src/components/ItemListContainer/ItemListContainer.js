import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
        setTitulo(categoryId || "Productos");
      })
      .catch((error) => {
        console.error(error);
        setTitulo("Productos");
      });
  }, [categoryId]);

  return (
    <div className="mt-32 text-center pb-12">
      <h1>{greeting}</h1>
      <ItemList products={products} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
