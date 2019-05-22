import React from 'react';

const Search = ( props ) => {

    const { item } = props;

    console.log('item search ====', item);
    

    const handleInputChange = event => {
        const query = event.target.value;

        this.setState(prevState => {
            const filter = prevState.item.filter(element => {
                console.log('ELEMENT IS', element.name.toLowerCase().includes(query.toLowerCase()));
                
                return element.name.toLowerCase().includes(query.toLowerCase());
            })

            return {
                filter
            };
        })
    }

    return(
        <form className="search">
            <input id="venueType" placeholder="Pesquisar" onChange={handleInputChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Search;