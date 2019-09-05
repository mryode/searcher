import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <SearchBar />
            <SearchResults />
        </div>
    ); 
};

export default App;