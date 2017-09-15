import React from 'react';
import { func, object } from 'prop-types';
import './styles/ItemCard.css';

const ItemCard = ({
  deleteItem,
  editItem,
  handleClick,
  item,
}) => {
  return (
    <section>
      <h3>{item.name}</h3>
      <p>Reason to keep?: {item.reason_to_store}</p>
      <label htmlFor="cleanliness">Cleanliness:
        <select
          id="cleanliness"
          value={item.cleanliness}
          onChange={e => editItem(e.target.value, item.id)}
        >
          <option value="Sparkling">Sparkling</option>
          <option value="Dusty">Dusty</option>
          <option value="Rancid">Rancid</option>
        </select>
      </label>
      <button onClick={() => deleteItem(item.id)}>Throw it away!!</button>
      <button onClick={() => handleClick(item)}>View Details</button>
    </section>
  );
};

ItemCard.defaultProps = {
  deleteItem: func,
  editItem: func,
  handleClick: func,
  item: object,
};

ItemCard.propTypes = {
  deleteItem: func,
  editItem: func,
  handleClick: func,
  item: object,
};

export default ItemCard;
