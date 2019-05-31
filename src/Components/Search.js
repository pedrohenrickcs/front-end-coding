import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: '',
            item: []
        }
        
        console.log('item search =dfsdf===', props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        console.log(this.props);
        

        this.setState({
            item: this.props.item
        })
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });

        console.log('searchString', this.state.searchString);
    }
    
    render() {        

        return(
            <form className="search">
                <input 
                    id="venueType" 
                    type="text"
                    placeholder="Pesquisar" 
                    ref="search" 
                    value={this.state.searchString}
                    onChange={this.handleChange}
                />
                <input 
                    type="submit" 
                    value="Submit"
                />
            </form>
        )
    }
    
}



export default Search;