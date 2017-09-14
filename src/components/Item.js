import React from 'react';
import './styles/Item.css';

const Item = ({ item, open, handleClick }) => {
  return (
    <section>
      <h3>{item.name}</h3>
      <button onClick={() => handleClick()}>View Details</button>
    </section>
  );
};

export default Item;
