import React from 'react';
import './styles/Item.css';

const Item = ({ item, handleClick, deleteItem, getItems }) => {
  return (
    <section>
      <h3>{item.name}</h3>
      <button onClick={() => deleteItem(item.id)}>Throw it away!!</button>
      <button onClick={() => handleClick(item)}>View Details</button>
    </section>
  );
};

export default Item;
