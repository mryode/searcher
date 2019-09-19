import React, { useState, useEffect, useRef } from 'react';
import ResultList from '../ResultList/ResultList';
import SearchInput from '../SearchInput/SearchInput';

import './SearchBar.css';
import OutsideClickDetector from '../OutsideClickDetector';

const SearchBar = ({ onPlayClick }) => {
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            searchText === event.target.value ? setShowResults(true) : setSearchText(event.target.value);
        }
    }

    const handleSearchClick = value => {
        searchText === value ? setShowResults(true) : setSearchText(value);
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
                <SearchInput handleKeyPress={handleKeyPress} handleSearchClick={handleSearchClick} />
                {showResults ? <ResultList videoList={searchResult} onPlayClick={videoId => handlePlay(videoId)} /> : null}
            </React.Fragment>
        </OutsideClickDetector>
    );
};

export default SearchBar;