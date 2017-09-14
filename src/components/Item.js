import React from 'react';
import './styles/Item.css';

const Item = ({ item, handleClick }) => {
  return (
    <section>
      <h3>{item.name}</h3>
      <button onClick={() => handleClick(item)}>View Details</button>
    </section>
  );
};

export default Item;
