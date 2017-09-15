import React from 'react';
import { func, array, bool } from 'prop-types';
import ItemList from './ItemList';
import './styles/Garage.css';

const Garage = ({
  deleteItem,
  displayFullItem,
  editItem,
  getItems,
  items,
  open,
  showFullDisplay,
}) => {
  const garageClass = open ? 'opened' : 'closed';

  return (
    <main className={`garage-door ${garageClass}`}>
      <ItemList
        items={items}
        open={open}
        handleClick={displayFullItem}
        showFullDisplay={showFullDisplay}
        getItems={getItems}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </main>
  );
};

Garage.defaultProps = {
  deleteItem: func,
  displayFullItem: bool,
  editItem: func,
  getItems: func,
  items: array,
  open: bool,
  showFullDisplay: bool,
};

Garage.propTypes = {
  deleteItem: func,
  displayFullItem: bool,
  editItem: func,
  getItems: func,
  items: array,
  open: bool,
  showFullDisplay: bool,
};

export default Garage;
