// const endpoint = "http://localhost:4000/api/v1/items";

// const getAllItems = () => {
//   return fetch(`${endpoint}`, {
//     credentials: "include",
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// const getOneItem = (itemId) => {
//   return fetch(`${endpoint}/${itemId}`, {
//     credentials: "include",
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// const createItem = (userId, cartId, newItem) => {
//   return fetch(`http://localhost:4000/api/v1/users/${userId}/${cartId}/items`, {
//     method: "Item",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newItem),
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// const updateItem = (itemId, updatedItem) => {
//   return (
//     fetch(`${endpoint}/${itemId}`, {
//       credentials: "include",
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedItem),
//     })
//       .then((res) => res.json())
//       .then(res => console.log(res))
//       .catch((err) => console.log(err))
//   );
// };

// const deleteItem = (itemId) => {
//   return fetch(`${endpoint}/${itemId}`, {
//     credentials: "include",
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// export default {
//   getAllItems,
//   getOneItem,
//   createItem,
//   updateItem,
//   deleteItem,
// };