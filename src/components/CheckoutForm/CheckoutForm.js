import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      nombre,
      telefono,
      correo,
      direccion,
    };

    onConfirm(userData);
  };

  return (
    <div>
      <form onSubmit={handleConfirm}>
        <div className="mb-4">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="Nombre y Apellido"
            required
            value={nombre}
            onChange={({ target }) => setNombre(target.value)}
          ></input>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="Teléfono"
            required
            value={telefono}
            onChange={({ target }) => setTelefono(target.value)}
          ></input>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="Email"
            required
            value={correo}
            onChange={({ target }) => setCorreo(target.value)}
          ></input>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="Dirección"
            required
            value={direccion}
            onChange={({ target }) => setDireccion(target.value)}
          ></input>
          <div>
            <button
              type="submit"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-4"
            >
              {" "}
              Generar Orden
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
