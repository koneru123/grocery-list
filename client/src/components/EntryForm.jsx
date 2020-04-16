import React from 'react';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    const {item, quantity} = this.state;
    event.preventDefault();
    this.props.addGrocery(item, quantity);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Item
          <input name="item" value={this.state.item} onChange={this.handleChange}/>
        </label>
        <label> Qunatity
          <input name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        </label>
        <button type="submit">Add Grocery</button>
      </form>
    )
  }
}

export default EntryForm;