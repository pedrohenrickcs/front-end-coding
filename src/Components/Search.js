import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        console.log('item search ====', props);
    }
    
    handleInputChange(event) {
        // const query = event.target.value;
        console.log('e', this);
        
    
        // this.setState(prevState => {
        //     const filter = prevState.item.filter(element => {
        //         console.log('ELEMENT IS', element.name.toLowerCase().includes(query.toLowerCase()));
                
        //         return element.name.toLowerCase().includes(query.toLowerCase());
        //     })
    
        //     return {
        //         filter
        //     };
        // })
    }

    componentDidMount() {
        this.handleInputChange()
    }

    render() {

        return(
            <form className="search">
                <input id="venueType" placeholder="Pesquisar" onChange={this.handleInputChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
    
}



export default Search;