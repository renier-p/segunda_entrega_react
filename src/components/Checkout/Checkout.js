import { db } from "../../config/firebase";
import { CartContext } from "../Context/CartContext";
import React, { useContext, useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
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

      const orderRef = collection(db, "orden");
      const orderAdded = await addDoc(orderRef, objOrder);

      console.log(orderAdded);
      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <h1>Se esta generando su orden...</h1>;
  }
  if (orderId) {
    console.log("orderId:", orderId);
    return <h1 className=" -mt-72">{orderId}</h1>;
  }
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;

// import React, { useContext, useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../config/firebase";
// import { CartContext } from "../Context/CartContext";

// function Checkout() {
//   const [nombre, setNombre] = useState("");
//   const [telefono, setTelefono] = useState(0);
//   const [correo, setCorreo] = useState("");
//   const [direccion, setDireccion] = useState("");
//   const { getCartItems, clearCart } = useContext(CartContext);

//   const onSubmitItem = async (e) => {
//     e.preventDefault();

//     try {
//       const ordenCollectionRef = collection(db, "orden");

//       const productosDelPedido = getCartItems();

//       const docRef = await addDoc(ordenCollectionRef, {
//         nombre,
//         telefono,
//         correo,
//         direccion,
//         productosDelPedido,
//         timestamp: new Date(),
//       });

//       console.log("Orden generada con ID: ", docRef.id);

//       setNombre("");
//       setTelefono(0);
//       setCorreo("");
//       setDireccion("");
//       clearCart();
//     } catch (error) {
//       console.error("Error al generar la orden: ", error);
//     }
//   };

//   return (
//     <div className="block">
//       <div className="flex flex-col">
//         <form onSubmit={onSubmitItem}>
//           <div className="mb-4">
//             <div>
//               <input
//                 type="text"
//                 id="first_name"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
//                 placeholder="Nombre y Apellido"
//                 onChange={(e) => setNombre(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="number"
//                 id="last_name"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
//                 placeholder="Teléfono"
//                 onChange={(e) => setTelefono(Number(e.target.value))}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 id="company"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
//                 placeholder="Email"
//                 onChange={(e) => setCorreo(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="text"
//                 id="company"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
//                 placeholder="Dirección"
//                 onChange={(e) => setDireccion(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-4"
//             onClick={onSubmitItem}
//           >
//             Generar Orden
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Checkout;
