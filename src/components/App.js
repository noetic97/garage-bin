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

  deleteItem(id) {
    fetch(`api/v1/items/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
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
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
