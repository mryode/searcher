import React, { useState, useEffect, useRef } from 'react';
import SearchResults from '../SearchResults/SearchResults';

import './SearchBar.css';
import OutsideClickDetector from '../OutsideClickDetector';

const SearchBar = ({ onPlayClick }) => {
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const input = useRef(null);

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            searchText === event.target.value ? setShowResults(true) : setSearchText(event.target.value);
        }
    }

    const handleSearchClick = () => {
        searchText === input.current.value ? setShowResults(true) : setSearchText(input.current.value);
    };

    // This effect will make request for the videos when 
    // the searchText changes (on enter or button click).
    useEffect(() => {
        if (searchText) {
            fetch(`http://localhost:3001/search/${searchText}`)
                .then(resp => resp.json())
                .then(json => {
                    setSearchResult(json);
                    setShowResults(true);
                })
                .catch(err => console.error(err));
        }
    }, [searchText])

    const handleOutsideSearchBarClick = () => {
        setShowResults(false);
    }

    const handlePlay = videoId => {
        setShowResults(false);
        onPlayClick(videoId);
    }

    return (
        <OutsideClickDetector handleOutsideSearchBarClick={handleOutsideSearchBarClick}>
            <React.Fragment>
                <div className="search-bar">
                    <input
                        ref={input}
                        type="text"
                        placeholder="Search on YouTube"
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="search-btn"
                        onClick={handleSearchClick}
                    >
                        Search
                    </button>
                </div>
                {showResults ? <SearchResults videoList={searchResult} onPlayClick={videoId => handlePlay(videoId)} /> : null}
            </React.Fragment>
        </OutsideClickDetector>
    );
};

export default SearchBar;