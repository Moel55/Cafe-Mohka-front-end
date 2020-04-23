import React from "react";
import "./ItemList.css";
import { Link } from 'react-router-dom';


const ItemList = (props) => {
  let itemList = props.items.map(function(item, index) {
    return (<Link className="list" key={index} to={{
        pathname:`/items/${item.name.replace(/\s+/g,'-').toLowerCase()}`
    }}>
            {/* <img className="ui avatar image" src={item.photo} alt={item.name}/> */}
            <div className="content">
            <div className="header">{item.name}</div>
            </div>
        </Link>)})
return(
    <div className="ui middle aligned selection massive list" id="itemList">
        {itemList}
    </div>
);
}

export default ItemList;
  