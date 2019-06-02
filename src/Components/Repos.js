import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Commits from './Commits'

const Repos = (props) => {
    
    const { userResult } = props;

    return(
        <ul>
            {userResult.map((e) => (
                <li key={e.id}>
                    <Link to="/commits">
                        {e.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Repos;