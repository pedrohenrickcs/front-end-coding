import React,  { useState } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

// import * as ApiGitHub from './Components/Utils/ApiGithub';

import Search from './Components/Search'
import Repos from './Components/Repos'
import { lifecycle } from 'recompose';

const App = (props) => {	

	const BASE_URL = `https://api.github.com/users/pedrohenrickcs`;
	
	const getUser = (e) => {
		axios.get(BASE_URL)
	 		.then(data => {
				console.log('data', data);
	 		})
	 		.catch(err => console.error(err))
	}

	return(
		<Grid fluid>
			<Row>
				<Col xs={12}>
					<Row center="xs">
						<Search></Search>
					</Row>
					<Row center="xs">
						<Repos
							getUser={getUser}>
						</Repos>
					</Row>
				</Col>
			</Row>
      	</Grid>
	)
}

ReactDOM.render(
 	<App/>,
  document.getElementById('app')
);

export default App;
