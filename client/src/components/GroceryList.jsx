import React from 'react';
import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = ({groceries, handleDelete}) => (
  <ul className="groceries">
    {groceries.map(grocery =>
    <GroceryListItem
    key={grocery.id}
    id={grocery.id}
    item={grocery.item}
    quantity={grocery.quantity}
    handleDelete={handleDelete}
    />)}
  </ul>
)

export default GroceryList;