import React from 'react';
//import PostContainer from '../../container/PostContainer'


const Item = (props) => {
  return(
    <div className="ui raised segment item" id="itemCard">
      <div className="itemText">
        <h2 id="itemName">{ props.item.title }</h2>
        <h3>{ props.item.description }</h3>
      </div>
      {/* <img className="ui bordered image" style={{display: "block"}} src={props.item.photo} alt="" /> */}
      {<PostContainer itemId={props.item._id} user={props.user} />}
    </div>
  );
};

export default Item;