import React from 'react';
import ItemList from './ItemList'
import './styles/Garage.css';

const Garage = ({ items }) => {
  return (
    <main className="garage-door">
      <ItemList items={items} />
    </main>
  );
};

export default Garage;
