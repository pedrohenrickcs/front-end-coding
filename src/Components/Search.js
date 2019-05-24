import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultFilter: [],
            items: []
        }
        console.log('item search ====', this.props);
        
    }
    
    handleInputChange(event) {
        // const query = event.target.value;
        
        this.setState ({ items: this.props.items })
        console.log('e', this.state.items);
    
        // const filter = prevState.item.filter(element => {
        //     console.log('ELEMENT IS', element.name.toLowerCase().includes(query.toLowerCase()));
            
        //     return element.name.toLowerCase().includes(query.toLowerCase());
        // })

        // return {
        //     filter
        // };

        // filterLocation(term) {
        //     const resultFilter = this.state.items.filter((item) => {
        //         return item.name.toLowerCase().includes(term.toLowerCase());
        //     });

        //     this.setState({ filteredItems: resultFilter })
        // }
    }

    componentDidMount() {
        this.handleInputChange()
    }

    render() {

        const { item } = this.props

        console.log('this', item);  

        return(
            <form className="search">
                <input id="venueType" placeholder="Pesquisar" onChange={this.handleInputChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
    
}



export default Search;