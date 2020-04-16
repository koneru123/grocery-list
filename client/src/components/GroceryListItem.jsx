import React from 'react';

const GroceryListItem = (props) => {
  const {item, quantity} = props.grocery;
  return (
    <li>
      <span> {item} </span>
      <span> {quantity} </span>
    </li>
  )
}

export default GroceryListItem;