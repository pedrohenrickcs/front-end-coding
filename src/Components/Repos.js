import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Commits from './Commits'

const Repos = (props) => {
    
    const { userResult } = props;

    function Index() {
      return <h2>Home</h2>;
    }

    return(
        <Router>
            <Commits></Commits>
            <ul>
                {userResult.map((e) => (
                    <li key={e.id}>
                        <Link to="/commits">
                            {e.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Route path="/commits" exact component={Commits} />
        </Router>
    )
}

export default Repos;