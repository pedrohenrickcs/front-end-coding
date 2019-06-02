import React from 'react';

const Header = (props) => {

    console.log('props', props);
    

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
        <h1 style={text}><span style={textShort}>GitHub:</span><br/>
            <img src={props.avatar} style={image} />
            {props.nameProfile}
        </h1>
    )
}

export default Header;