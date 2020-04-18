import React from 'react';
import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = ({groceries}) => (
  <ul className="groceries">
    {groceries.map(grocery => <GroceryListItem key={grocery.id} grocery={grocery}/>)}
  </ul>
)

export default GroceryList;