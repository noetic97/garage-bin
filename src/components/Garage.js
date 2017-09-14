import React from 'react';
import ItemList from './ItemList'
import './styles/Garage.css';

const Garage = ({ items, open, displayFullItem }) => {
  const garageClass = open ? 'opened' : 'closed';

  return (
    <main className={`garage-door ${garageClass}`}>
      <ItemList items={items} open={open} handleClick={displayFullItem} />
    </main>
  );
};

export default Garage;
