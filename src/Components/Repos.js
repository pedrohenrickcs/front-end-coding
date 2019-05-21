import React from 'react';

const Repos = (props) => {
    
    const { item } = props

    console.log('REPOS', item);

    return(
        <ul>
            {item.map((e) => (
                <li key={e.id}>{e.name}</li>
            ))}
        </ul>
    )
}

export default Repos;