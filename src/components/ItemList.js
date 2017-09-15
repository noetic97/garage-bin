import React from 'react';
import Item from './Item';
import ItemCard from './ItemCard';
import ItemCreate from './ItemCreate';
import './styles/ItemList.css';

const ItemList = ({ items, open, handleClick, getItems, deleteItem, showFullDisplay, editItem }) => {
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


export default ItemList;
