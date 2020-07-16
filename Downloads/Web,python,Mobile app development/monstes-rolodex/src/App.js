import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.data)
			.then((users) => this.setState({monsters: users}));
	}

	render() {
		const {monsters, searchField} = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<Search
					placeHolder="search monsters"
					handleChange={(e) => {
						this.setState({searchField: e.target.value});
					}}
				/>
				<h1 class="a">Monsters Rolodex</h1>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}
export default App;
