import React from 'react';
import { array, func } from 'prop-types';
import './styles/Item.css';

const Item = ({
  deleteItem,
  handleClick,
  item,
}) => {
  return (
    <section>
      <h3>{item.name}</h3>
      <button onClick={() => deleteItem(item.id)}>Throw it away!!</button>
      <button onClick={() => handleClick(item)}>View Details</button>
    </section>
  );
};

Item.defaultProps = {
  deleteItem: func,
  handleClick: func,
  item: array,
};

Item.propTypes = {
  deleteItem: func,
  handleClick: func,
  item: array,
};

export default Item;
