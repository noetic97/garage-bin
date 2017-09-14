import React from 'react';
import Item from './Item';
import './styles/ItemList.css';

const ItemList = ({ items, displayFullItem }) => {
  const itemArray = items.map((item) => {
    return <Item key={item.id} item={item} handleClick={displayFullItem} />;
  });

  return (
    <section className="item-display">
      <header>All Items</header>
      <section className="item-list">
        {itemArray}
      </section>
    </section>
  );
};


export default ItemList;
