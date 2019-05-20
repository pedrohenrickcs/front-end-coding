import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

// import * as ApiGitHub from './Components/Utils/ApiGithub';

import Search from './Components/Search'
import Repos from './Components/Repos'
import { lifecycle } from 'recompose';

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			items: ''
		};
	}

	getApi() {
		const BASE_URL = `https://api.github.com/users/pedrohenrickcs/repos`;

		console.log('state', this.state);
		
		axios.get(BASE_URL)
				.then(e => {
					const result = e.data.map((i) => {
						console.log('i', i.name);
						
						return this.state.items = i.name;
					})

					this.setState({ items: result })
					
					console.log('result', result);
				})
				.catch(err => console.error(err))
	}

	componentDidMount() {
		this.getApi()
	}

	render() {
		return(
			<Grid fluid>
				<Row>
					<Col xs={12}>
						<Row center="xs">
							<Search></Search>
						</Row>
						<Row center="xs">
							<Repos>
							</Repos>
						</Row>
					</Col>
				</Row>
			  </Grid>
		)
	}

	
}



ReactDOM.render(
 	<App/>,
  document.getElementById('app')
);