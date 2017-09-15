import React from 'react';
import Item from './Item';
import ItemCreate from './ItemCreate';
import './styles/ItemList.css';

const ItemList = ({ items, open, handleClick, getItems, deleteItem }) => {
  const hidden = !open ? 'hidden' : '';
  const itemCount = items.length;
  const itemArray = items.map((item) => {
    return (<Item
      key={item.id}
      item={item}
      open={open}
      handleClick={handleClick}
      getItems={getItems}
      deleteItem={deleteItem}
    />);
  });

  return (
    <section className={`item-display ${hidden}`}>
      <header>You have {itemCount} Items</header>
      <ItemCreate getItems={getItems} />
      <section className="item-list">
        {itemArray}
      </section>
    </section>
  );
};


export default ItemList;
