import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import './App.scss'

// import * as ApiGitHub from './Components/Utils/ApiGithub';

import Search from './Components/Search'
import Repos from './Components/Repos'

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
			console.log('result', result.name);
			return result.name;
		})

		axios.get(`${BASE_URL}/contacts/commits`)
		.then(commit => {
			console.log('COMMITS', commit);
			

		})

	}

	componentDidMount() {
		this.getUser()
	}
	
	render() {
		
		const item  = this.state.items

		this.getCommit()

		console.log('STATE =========', this);

		const text = {
			fontFamily: 'monospace',
			fontSize: '15px',
		}
		
		const textShort = {
			fontWeight: '200',
			fontSize: '30px',
			marginBottom: '10px',
			display: 'inline-block',
		}
		
		const image = {
			width: '60px',
			height: '60px',
			verticalAlign: 'middle',
			marginRight: '10px'
		}		

		return(
			<Grid fluid>
				<Row>
					<Col xs={12}>
						<Row center="xs">
							<h1 style={text}><span style={textShort}>GitHub:</span><br/>
								<img src={this.state.avatar} style={image} />
								{this.state.nameProfile}
							</h1>
						</Row>
						<Row center="xs">
							<Search 
								item={item}
							></Search>
						</Row>
					</Col>
				</Row>
			  </Grid>
		)
	}
}

ReactDOM.render(
 	<App />,
  document.getElementById('app')
);