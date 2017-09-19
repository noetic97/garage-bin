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
  sortItems,
}) => {
  const garageClass = open ? 'opened' : 'closed';

  return (
    <main className={`garage-door ${garageClass}`}>
      <ItemList
        items={items}
        open={open}
        displayFullItem={displayFullItem}
        getItems={getItems}
        editItem={editItem}
        deleteItem={deleteItem}
        sortItems={sortItems}
      />
    </main>
  );
};

Garage.defaultProps = {
  deleteItem: func,
  displayFullItem: func,
  editItem: func,
  getItems: func,
  items: array,
  open: bool,
  sortItems: func,
};

Garage.propTypes = {
  deleteItem: func,
  displayFullItem: func,
  editItem: func,
  getItems: func,
  items: array,
  open: bool,
  sortItems: func,
};

export default Garage;
