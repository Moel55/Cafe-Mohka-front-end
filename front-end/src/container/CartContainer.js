// import React from "react";
// import { Container } from "semantic-ui-react";
// import Item from "../components/Item/Item"
// // import "./CartContainer.css";
// import ItemAPI from "../api/ItemAPI";
// // import Nav from "../components/Nav/Nav"

// class CartContainer extends React.Component {
//   state = {
//     items: [],
//   };

//   handleDelete = (id) => {
//     ItemAPI.deleteItem(id).then((res) => {
//       let items = this.state.items.filter((item) => {
//         return item._id !== id;
//       });

//       this.setState({
//         items,
//       });
//     });
//   };

//   handleEdit = (id, updatedItem) => {
//     ItemAPI.updateItem(id, updatedItem).then((res) => {
//       let items = this.state.items;
//       let updatedItem = items.findIndex((item) => item._id === res._id);
//       items[updatedItem] = res;
//       this.setState({
//         items,
//       });
//     });
//   };

//   componentDidMount = () => {
//     let startingItems = this.props.items;
//     this.setState({
//       items: startingItems,
//     });
//   };

//   render() {
//     let items = this.state.items.map((item, index) => {
//       return (
//         <Item
//           name={item.name}
//           price={item.price}
//           user={item.author.username}
//           userid={item.cart}
//           id={item._id}
//           key={index}
//           handleDelete={this.handleDelete}
//           handleEdit={this.handleEdit}
//         />
//       );
//     });

//     return (
//       <div className="CartContainer">
//         <Container textAlign="left">{items}</Container>
//       </div>
//     );
//   }
// }

// export default CartContainer;