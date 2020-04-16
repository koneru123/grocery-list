import React from 'react';
import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = ({groceries}) => (
  <ul className="groceries">
    {groceries.map((grocery, index) => <GroceryListItem key={index} grocery={grocery}/>)}
  </ul>
)

export default GroceryList;