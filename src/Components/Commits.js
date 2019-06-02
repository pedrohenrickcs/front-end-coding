import React from 'react';
import { Router, withRouter } from "react-router-dom";

const Commits = () => {

    console.log('dsjfnjff', this);
    
    return (
        <Router>
            {/* {
                props.location.pathname!=='/commits' ? <Repos/>:''
            } */}
            
        
            <h1>OLA</h1>
            
        </Router> 
    )


}

export default withRouter(Commits);