import React from 'react';
import { func, object } from 'prop-types';
import './styles/ItemCard.css';

const ItemCard = ({
  deleteItem,
  editItem,
  displayFullItem,
  item,
}) => {
  const { id, cleanliness, item_display, name } = item;
  return (
    <section>
      <h3>{name}</h3>
      <p>Reason to keep?: {item.reason_to_store}</p>
      <label htmlFor="cleanliness">Cleanliness:
        <select
          id="cleanliness"
          value={cleanliness}
          onChange={e => editItem(e.target.value, id, item_display)}
        >
          <option value="Sparkling">Sparkling</option>
          <option value="Dusty">Dusty</option>
          <option value="Rancid">Rancid</option>
        </select>
      </label>
      <button onClick={() => deleteItem(id)}>Throw it away!!</button>
      <button onClick={() => displayFullItem(id)}>View Details</button>
    </section>
  );
};

ItemCard.defaultProps = {
  deleteItem: func,
  displayFullItem: func,
  editItem: func,
  item: object,
};

ItemCard.propTypes = {
  deleteItem: func,
  displayFullItem: func,
  editItem: func,
  item: object,
};

export default ItemCard;
