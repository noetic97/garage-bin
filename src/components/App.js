import React, { Component } from 'react';
import GarageOpener from './GarageOpener';
import Garage from './Garage';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      garageOpen: false,
      items: [],
      sorted: false,
    };

    this.getItems = this.getItems.bind(this);
    this.toggleDoor = this.toggleDoor.bind(this);
    this.displayFullItem = this.displayFullItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }

  getItems() {
    fetch('api/v1/items')
      .then(res => res.json())
      .then(items => this.setState({
        items,
        sorted: false,
      }))
      .catch((error) => {
        throw new Error({ error });
      });
  }

  toggleDoor() {
    this.setState({ garageOpen: !this.state.garageOpen });
  }

  displayFullItem(id) {
    const toggledItem = this.state.items.map((item) => {
      if (id === item.id) {
        item.item_display = !item.item_display; // eslint-disable-line
        const newItem = Object.assign({}, item);
        return newItem;
      }
      return item;
    });
    this.setState({ items: toggledItem });
  }

  sortItems(items) {
    if (this.state.sorted) {
      items.reverse();
      return this.setState({ sorted: false });
    }
    const sortedArray = items.sort((a, b) => {
      if (a.name.length === 1 || b.name.length === 1) {
        return a.name[0].toLowerCase() > b.name[0].toLowerCase();
      }
      return (a.name[0].toLowerCase() + a.name[1].toLowerCase()) >
      (b.name[0].toLowerCase() + b.name[1].toLowerCase());
    });
    return this.setState({ items: sortedArray, sorted: true });
  }

  editItem(cleanliness, id, display) {
    fetch(`api/v1/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        cleanliness,
        item_display: display,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(() => this.getItems())
      .catch((error) => {
        throw new Error({ error });
      });
  }

  deleteItem(id) {
    fetch(`api/v1/items/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(() => {
        const newItemArray = this.state.items.filter((item) => {
          return item.id !== id;
        });
        this.setState({ items: newItemArray });
      })
      .catch((error) => {
        throw new Error({ error });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to the Garage Bin</h1>
          <p className="App-intro">
            Open the garage to view or store your items
          </p>
        </div>
        <GarageOpener
          getItems={this.getItems}
          open={this.state.garageOpen}
          toggleDoor={this.toggleDoor}
        />
        <Garage
          getItems={this.getItems}
          items={this.state.items}
          open={this.state.garageOpen}
          displayFullItem={this.displayFullItem}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
          sortItems={this.sortItems}
          sorted={this.state.sorted}
        />
      </div>
    );
  }
}

export default App;
