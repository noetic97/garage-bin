import React from 'react';
import { func, array, bool } from 'prop-types';
import Item from './Item';
import ItemCard from './ItemCard';
import ItemCreate from './ItemCreate';
import './styles/ItemList.css';

const ItemList = ({
  deleteItem,
  editItem,
  getItems,
  displayFullItem,
  items,
  open,
  sortItems,
}) => {
  const hidden = !open ? 'hidden' : '';
  const itemCount = items.length;
  const sparkleCount = items.filter((item) => {
    return item.cleanliness === 'Sparkling';
  });
  const dustyCount = items.filter((item) => {
    return item.cleanliness === 'Dusty';
  });
  const rancidCount = items.filter((item) => {
    return item.cleanliness === 'Rancid';
  });
  const itemArray = items.map((item) => {
    if (item.item_display) {
      return (<ItemCard
        key={item.id}
        item={item}
        displayFullItem={displayFullItem}
        getItems={getItems}
        editItem={editItem}
        deleteItem={deleteItem}
      />);
    }
    return (<Item
      key={item.id}
      item={item}
      displayFullItem={displayFullItem}
      getItems={getItems}
      deleteItem={deleteItem}
    />);
  });

  return (
    <section className={`item-display ${hidden}`}>
      <header>
        <p>You have {itemCount} Items.</p>
        <p> Sparkling: <span className="clean-count">{sparkleCount.length}</span>,
            Dusty: <span className="clean-count">{dustyCount.length}</span>,
            Rancid: <span className="clean-count">{rancidCount.length}</span>
        </p>
        <button onClick={() => sortItems(items)}>Sort the garage</button>
      </header>
      <ItemCreate getItems={getItems} />
      <section className="item-list">
        {itemArray}
      </section>
    </section>
  );
};

ItemList.defaultProps = {
  deleteItem: func,
  displayFullItem: func,
  editItem: func,
  getItems: func,
  items: array,
  open: bool,
  sortItems: func,
};

ItemList.propTypes = {
  deleteItem: func,
  displayFullItem: func,
  editItem: func,
  getItems: func,
  items: array,
  open: bool,
  sortItems: func,
};

export default ItemList;
