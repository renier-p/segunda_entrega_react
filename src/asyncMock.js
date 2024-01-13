// const products = [
//   {
//     id: "1",
//     name: "Camisa de Red Hot Chili Peppers",
//     price: 1000,
//     category: "camisas",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUklneeIonzaCkskZ0p6qf9GUIM5k8bnO9yrTYbOuHivWKCUNgsVI44aisUbqvcxxRsc&usqp=CAU",
//     stock: 10,
//     description: "Camisa de Red Hot Chili Peppers",
//   },
//   {
//     id: "2",
//     name: "Camisa de Red Hot Chili Peppers",
//     price: 1000,
//     category: "camisas",
//     img: "https://polerasderock.cl/cdn/shop/products/image_84f5aab2-8f88-4a81-8349-22bf5754283f.png?v=1668827974",
//     stock: 10,
//     description: "Camisa de Red Hot Chili Peppers",
//   },
//   {
//     id: "3",
//     name: "Camisa de Red Hot Chili Peppers",
//     price: 1000,
//     category: "camisas",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3yaBYkA1_CG7RKtUjvZNJ9wytsgMBPBcbq4xHegj2xYiI1ev5Tiiug1hqN-o1wgA7qk&usqp=CAU",
//     stock: 10,
//     description: "Camisa de Red Hot Chili Peppers",
//   },

//   {
//     id: "4",
//     name: "Taza de Red Hot Chili Peppers",
//     price: 500,
//     category: "tazas",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmQf7aAWCZHO74AFyNwO-qQTImkP7U7CEMpKlFibZzeU-9oRvhKZtCfGeS1u9mtX7-m4&usqp=CAU",
//     stock: 10,
//     description: "Taza de Red Hot Chili Peppers",
//   },
//   {
//     id: "5",
//     name: "Taza de Red Hot Chili Peppers",
//     price: 500,
//     category: "tazas",
//     img: "https://http2.mlstatic.com/D_NQ_NP_992471-MLA53338047752_012023-O.webp",
//     stock: 10,
//     description: "Taza de Red Hot Chili Peppers",
//   },
//   {
//     id: "6",
//     name: "Taza de Red Hot Chili Peppers",
//     price: 500,
//     category: "tazas",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJL8byqj0qKT3n_xt2McFKNW4-uSisI_MsbP9QGEZToPAedfAMXabqPFhn2P3ld72xSB0&usqp=CAU",
//     stock: 10,
//     description: "Taza de Red Hot Chili Peppers",
//   },
//   {
//     id: "7",
//     name: "Llavero de Red Hot Chili Peppers",
//     price: 300,
//     category: "llaveros",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMLy7cnzCyj4JVnxdDWYMOwHB89DwQaycBynnUYUtJO5ZvWiyUSRfJvQM2tjpYvPlIGM&usqp=CAU",
//     stock: 10,
//     description: "Llavero de Red Hot Chili Peppers",
//   },
//   {
//     id: "8",
//     name: "Llavero de Red Hot Chili Peppers",
//     price: 300,
//     category: "llaveros",
//     img: "https://www.gustore.cl/img/estampados/186/186_29.png",
//     stock: 10,
//     description: "Llavero de Red Hot Chili Peppers",
//   },
//   {
//     id: "9",
//     name: "Llavero de Red Hot Chili Peppers",
//     price: 300,
//     category: "llaveros",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJ3yTTQVrCczMpQwbcaWQA4Sr954womFZqbeUGnCZhxdpne-IflLivbe5MPwC4M1F3cI&usqp=CAU",
//     stock: 10,
//     description: "Llavero de Red Hot Chili Peppers",
//   },
// ];

// export const getProducts = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(resolve(products));
//       resolve(products);
//     });
//   });
// };

// export const getProductById = (productId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(products.find((prod) => prod.id === productId));
//     });
//   });
// };

// export const getProductsByCategory = (category) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const filteredProducts = products.filter(
//         (prod) => prod.category === category
//       );

//       resolve(filteredProducts);
//     });
//   });
// };
