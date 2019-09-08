import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';

import './SearchBar.css';

const SearchBar = () => {
    const [seachText, setSeachText] = useState("");

    const handleInputChange = event => {
        console.log(event.target.value);
        setSeachText(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search on YouTube" 
                    onChange={handleInputChange} 
                />
            </div>
            <SearchResults searchText={seachText} />
        </React.Fragment>
    );
};

export default SearchBar;