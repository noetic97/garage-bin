import React from 'react';
import { func, bool } from 'prop-types';
import './styles/GarageOpener.css';

const GarageOpener = ({
  getItems,
  open,
  toggleDoor,
}) => {
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

GarageOpener.defaultProps = {
  getItems: func,
  open: bool,
  toggleDoor: func,
};

GarageOpener.propTypes = {
  getItems: func,
  open: bool,
  toggleDoor: func,
};

export default GarageOpener;
