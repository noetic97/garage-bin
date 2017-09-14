import React from 'react';
import './styles/GarageOpener.css';

const GarageOpener = ({ getItems, toggleDoor }) => {
  const doubleFunc = () => {
    getItems();
    toggleDoor();
  };

  return (
    <section className="garage-opener">
      <h3>Open Garage</h3>
      <button
        className="garage-opener-button"
        onClick={() => doubleFunc()}
      />
    </section>
  );
};

export default GarageOpener;
