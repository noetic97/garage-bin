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
  handleClick,
  items,
  open,
  showFullDisplay,
}) => {
  const hidden = !open ? 'hidden' : '';
  const itemCount = items.length;
  const itemArray = items.map((item) => {
    if (showFullDisplay) {
      return (<ItemCard
        key={item.id}
        item={item}
        handleClick={handleClick}
        getItems={getItems}
        editItem={editItem}
        deleteItem={deleteItem}
      />);
    }
    return (<Item
      key={item.id}
      item={item}
      handleClick={handleClick}
      getItems={getItems}
      deleteItem={deleteItem}
    />);
  });

  const sortItems = () => {
    const sortedArray = items.sort((a, b) => a.name[0] > b.name[0]);
    return sortedArray;
  };

  return (
    <section className={`item-display ${hidden}`}>
      <header>
        <p>You have {itemCount} Items</p>
        <button onClick={sortItems}>Sort the garage</button>
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
  editItem: func,
  getItems: func,
  handleClick: func,
  items: array,
  open: bool,
  showFullDisplay: bool,
};

ItemList.propTypes = {
  deleteItem: func,
  editItem: func,
  getItems: func,
  handleClick: func,
  items: array,
  open: bool,
  showFullDisplay: bool,
};

export default ItemList;
