import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import axios from 'axios';
import * as ApiGitHub from './Components/Utils/ApiGithub';

const App = () => {

	const BASE_URL = `https://api.github.com/users/pedrohenrickcs`;

	const getUser = (e) => {
	 	axios.get(BASE_URL)
	 	.then(data => {
			 console.log('data', data);
			 
			// data.response
		 }) 
	 	.catch(err => console.error(err))
	}

	getUser()

	return(
		<Grid fluid>
			<Row>
				<Col xs={6} md={10}>
					Hello, world!
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
