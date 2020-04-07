import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : ""
    };


  }
  
    //Lifecycle Method: When Compent is mounted, perform this action
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
  }

  //Use of Arrow function  = () =>  allows this to be set without having to bind this in the constructor using this.handleChange= this.handleChange.bind(this);
  handleChange = e => {
    this.setState({searchField: e.target.value });
  }

  render() {
    /* 
      Statement below is basically shorthand for 
      const monsters= this.state.monsters 
      or const searchField = this.state.searchField 
    
    */
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monsters=> 
        monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );


    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder = "Search Monsters"
        handleChange = {this.handleChange}
      />
      <CardList monsters={filteredMonsters} />        
      </div>
    );
  };
}

export default App;
