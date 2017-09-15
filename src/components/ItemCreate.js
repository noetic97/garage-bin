import React, { Component } from 'react';
import { func } from 'prop-types';
import './styles/ItemCreate.css';

class ItemCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      reason_to_store: '',
      cleanliness: 'Sparkling',
    };

    this.addItems = this.addItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addItems() {
    const { name, reason_to_store, cleanliness } = this.state;

    if (name && reason_to_store) { // eslint-disable-line
      fetch('api/v1/items', {
        method: 'POST',
        body: JSON.stringify({
          name,
          reason_to_store,
          cleanliness,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(() => this.props.getItems())
        .catch((error) => {
          throw new Error({ error });
        });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addItems();
    this.setState({
      name: '',
      reason_to_store: '',
      cleanliness: 'Sparkling',
    });
  }

  render() {
    const { name, reason_to_store, cleanliness } = this.state;

    return (
      <div className="create-item-form">
        <p>Got an item to store?</p>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            id="name"
            placeholder="Item Name"
            value={name}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            id="reason_to_store"
            placeholder="Reason to Keep?"
            value={reason_to_store} //eslint-disable-line
            onChange={e => this.handleChange(e)}
          />
          <select
            id="cleanliness"
            value={cleanliness}
            onChange={e => this.handleChange(e)}
          >
            <option value="Sparkling">Sparkling</option>
            <option value="Dusty">Dusty</option>
            <option value="Rancid">Rancid</option>
          </select>
          <button type="submit">Throw it in the garage</button>
        </form>
      </div>
    );
  }
}

ItemCreate.defaultProps = {
  getItems: func,
};

ItemCreate.propTypes = {
  getItems: func,
};

export default ItemCreate;
