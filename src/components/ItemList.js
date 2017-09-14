import React from 'react';
import Item from './Item';
import './styles/ItemList.css';

const ItemList = ({ items, open, handleClick }) => {
  const hidden = !open ? 'hidden' : '';
  const itemArray = items.map((item) => {
    return (<Item
      key={item.id}
      item={item}
      open={open}
      handleClick={handleClick}
    />);
  });

  return (
    <section className={`item-display ${hidden}`}>
      <header>All Items</header>
      <section className="item-list">
        {itemArray}
      </section>
    </section>
  );
};


export default ItemList;
