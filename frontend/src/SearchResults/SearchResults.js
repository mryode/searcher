import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

import './SearchResults.css';

const SearchResults = ({searchText}) => {
    return (
        <div className="search-results-container">
            {/* TODO: change to backend search request */}
            <h3>Searching for: {searchText}</h3>
    
            <SearchResult />
        </div>
    );
};

export default SearchResults;
