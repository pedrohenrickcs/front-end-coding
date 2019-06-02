import React, { Component } from 'react';
import Repos from './Repos';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            searchString: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            item: this.props.item
        })

        this.refs.search.focus();
    }

     handleChange() {
         this.setState({
             searchString: this.refs.search.value
         });
     }
    
    render() {        

        const { item } = this.props;
        
        let userResult = item;
        let search = this.state.searchString.trim().toLowerCase();
        
        if (search.length > 0) {
            userResult = userResult.filter(function (user) {
                return user.name.toLowerCase().match(search);
            });
        }

        return(
            <div>
                <form className="search">
                    <input 
                        id="venueType" 
                        type="text"
                        placeholder="Pesquisar"
                        ref="search" 
                        value={this.searchString}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                    <input 
                        type="submit" 
                        value="Submit"
                    />
                </form>
                <Repos 
                    item={item}
                    userResult={userResult}
                >
                </Repos>
            </div>
        )
    }
    
}

export default Search;