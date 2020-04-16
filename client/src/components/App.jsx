import React from 'react';
import Header from './Header.jsx';
import EntryForm from './EntryForm.jsx';
import GroceryList from './GroceryList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    }

    this.addGrocery = this.addGrocery.bind(this);
  }

  componentDidMount() {
    this.setState({groceries: this.props.groceries})
  }

  addGrocery(item, quantity) {
    const updatedGroceries = [...this.state.groceries, {item: item, quantity: quantity}];
    this.setState({groceries: updatedGroceries})
  }

  render() {
    return (
      <div>
        <Header />
        <EntryForm addGrocery={this.addGrocery}/>
        <GroceryList groceries={this.state.groceries}/>
    </div>
    )
  }
}

export default App;