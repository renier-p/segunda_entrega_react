import { db } from "../../config/firebase";
import { CartContext } from "../Context/CartContext";
import React, { useContext, useState } from "react";
import { Timestamp, addDoc, collection, writeBatch } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { getDocs, query, where, documentId } from "firebase/firestore";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const { cart, clearCart } = useContext(CartContext);

  const createOrder = async ({ nombre, telefono, correo, direccion }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          nombre,
          telefono,
          correo,
          direccion,
        },
        items: cart,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "Producto");
      console.log("IDs:", ids);
      const productAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orden");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("There are products that are out of stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h1 className=" mt-28 justify-center text-center">
        Se esta generando su orden...
      </h1>
    );
  }
  if (orderId) {
    return (
      <div className="flex mt-20 justify-center">
        <h1 className="mt-12 text-lg"> orden ID: {orderId}</h1>;
      </div>
    );
  }
  return (
    <div>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
