import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const collectionRef = categoryId
      ? query(collection(db, "Productos"), where("Categoria", "==", categoryId))
      : collection(db, "Productos");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
        setError(
          "Hubo un error al obtener la lista de productos. Por favor intentalo de nuevo"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="mt-32 text-center pb-12">
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
