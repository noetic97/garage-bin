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
      showFullDisplay: false,
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
      .then(items => this.setState({ items }))
      .catch((error) => {
        throw new Error({ error });
      });
  }

  toggleDoor() {
    this.setState({ garageOpen: !this.state.garageOpen });
  }

  displayFullItem() {
    this.setState({ showFullDisplay: !this.state.showFullDisplay });
  }

  sortItems(items) {
    const sortedArray = items.sort((a, b) => {
      if (a.name.length === 1 || b.name.length === 1) {
        return a.name[0].toLowerCase() > b.name[0].toLowerCase();
      }
      return (a.name[0].toLowerCase() + a.name[1].toLowerCase()) >
      (b.name[0].toLowerCase() + b.name[1].toLowerCase());
    });
    this.setState({ items: sortedArray });
  }

  editItem(cleanliness, id) {
    fetch(`api/v1/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        cleanliness,
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
          showFullDisplay={this.state.showFullDisplay}
          displayFullItem={this.displayFullItem}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
          sortItems={this.sortItems}
        />
      </div>
    );
  }
}

export default App;
