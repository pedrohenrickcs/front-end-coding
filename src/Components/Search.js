import React from 'react';

const Search = ( { isChange } ) => {

    return(
        <form className="search">
            <input id="venueType"  placeholder="Pesquisar" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Search;