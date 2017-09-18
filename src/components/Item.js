import React from 'react';
import { object, func } from 'prop-types';
import './styles/Item.css';

const Item = ({
  deleteItem,
  displayFullItem,
  item,
}) => {
  return (
    <section>
      <h3>{item.name}</h3>
      <button onClick={() => deleteItem(item.id)}>Throw it away!!</button>
      <button onClick={() => displayFullItem(item)}>View Details</button>
    </section>
  );
};

Item.defaultProps = {
  deleteItem: func,
  displayFullItem: func,
  item: object,
};

Item.propTypes = {
  deleteItem: func,
  displayFullItem: func,
  item: object,
};

export default Item;
