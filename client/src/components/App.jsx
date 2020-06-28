import React from 'react';
import axios from 'axios';
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
    this.setGroceries = this.setGroceries.bind(this);
    this.getGroceries = this.getGroceries.bind(this);
  }

  setGroceries({data}) {
    this.setState({groceries: data});
  }

  updateGroceries({data}) {
    this.setState({groceries: data});
  }

  // error handling
  handleError(error) {
    console.log(error);
  }

  // http request
  getGroceries() {
    axios.get('/groceries')
      .then(this.setGroceries)
      .catch(this.handleError)
  }

  // initialize
  componentDidMount() {
    //this.setState({groceries: this.props.groceries})
    this.getGroceries();
  }

  addGrocery(grocery) {
    axios.post('/groceries', grocery)
    .then(this.getGroceries)
    .catch(this.handleError)
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