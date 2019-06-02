import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import './App.scss'

// import * as ApiGitHub from './Components/Utils/ApiGithub';

import Search from './Components/Search'
import Repos from './Components/Repos'
import Header from './Components/Header'
import Commits from './Components/Commits'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			items: [],
			nameProfile: '',
			avatar: ''
		}
	}
	
	getUser() {
		let BASE_URL = `https://api.github.com/users/pedrohenrickcs`;
		
		axios.get(`${BASE_URL}/repos`)
		.then(e => {

			const wayApi = e.data[0].owner;

			this.setState({ nameProfile: wayApi.login, avatar: wayApi.avatar_url })
			
			const result = e.data.map((i) => {				
				return this.state.items = i;
			})
			
			this.setState({ items: result });
			
		})
		.catch(err => console.error(err))
	}

	getCommit() {
		let BASE_URL = `https://api.github.com/repos/pedrohenrickcs`;

		this.state.items.map((result) => {
			// console.log('result', result.name);
			return result.name;
		})

		axios.get(`${BASE_URL}/contacts/commits`)
		.then(commit => {
			// console.log('COMMITS', commit);
			

		})

	}

	componentDidMount() {
		this.getUser()
	}
	
	render() {

		// console.log('AVATAR', avatar);
		
		let state = this.state
		
		const item = state.items
		const avatar = state.avatar
		const nameProfile = state.nameProfile

		this.getCommit()

		console.log('STATE =========', this);	

		return(
			<Router>
				<Grid fluid>
					<Row>
						<Col xs={12}>
							<Row center="xs">
								<Header
									avatar={avatar}
									nameProfile={nameProfile}
								/>
							</Row>
							<Row center="xs">
								<Search 
									item={item}
								></Search>
							</Row>
							<Row>
								<Route path="/commits" exact component={Commits} />
							</Row>
						</Col>
					</Row>
				</Grid>
			</Router>

		)
	}
}

ReactDOM.render(
 	<App />,
  document.getElementById('app')
);