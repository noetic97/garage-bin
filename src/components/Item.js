import React from 'react';
import './styles/Item.css';

const Item = ({ item, open, handleClick, deleteItem, getItems }) => {
  const doubleFunc = (id) => {
    deleteItem(id);
    setTimeout(() => {
      getItems();
    }, 250);
  };

  return (
    <section>
      <h3>{item.name}</h3>
      <button onClick={() => doubleFunc(item.id)}>Throw it away!!</button>
      <button onClick={() => handleClick(item)}>View Details</button>
    </section>
  );
};

export default Item;
