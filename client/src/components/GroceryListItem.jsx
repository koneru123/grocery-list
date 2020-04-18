import React from 'react';

const GroceryListItem = ({id, item, quantity, handleDelete}) => (
    <li onClick={() => handleDelete(id)}>
      <span> {item} </span>
      <span> {quantity} </span>
    </li>
)

export default GroceryListItem;