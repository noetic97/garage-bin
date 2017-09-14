import React from 'react';
import './styles/GarageOpener.css';

const GarageOpener = ({ getItems, toggleDoor, open }) => {
  const openDisplay = !open ? 'Open Garage' : 'Close Garage';
  const doubleFunc = () => {
    getItems();
    toggleDoor();
  };

  return (
    <section className="garage-opener">
      <h3>{openDisplay}</h3>
      <button
        className="garage-opener-button"
        onClick={() => doubleFunc()}
      />
    </section>
  );
};

export default GarageOpener;
