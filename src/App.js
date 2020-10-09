import React from 'react';
import { CardList } from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.compoents';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ""
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => this.setState({ monsters: data }))
      .catch(err => console.log(err))
  }
  searchMonster(e){
    let search = e.target.value
    const monstersSearch = this.state.monsters.filter(monster => monster.name.includes(search));
    this.setState({monsters:monstersSearch, search})
  }
  render() {
    const {search, monsters} = this.state
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))


    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChane={ e=> this.setState({search: e.target.value})}
        />
        <CardList monsters={filterMonsters} />
        
      </div>
    );
  }
}

export default App;
