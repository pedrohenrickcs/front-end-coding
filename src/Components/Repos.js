import React from 'react';

const Repos = (props) => {
    
    const { item } = props;

    return(
        <ul>
            {item.map((e) => (
                <li key={e.id}>
                    <a href="#" >
                        {e.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Repos;