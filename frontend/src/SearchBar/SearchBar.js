import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ResultList from '../ResultList/ResultList';
import SearchInput from '../SearchInput/SearchInput';
import OutsideClickDetector from '../OutsideClickDetector';

import './SearchBar.css';

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
        console.log('searchText', searchText);
        searchText === value ? setShowResults(true) : setSearchText(value);
    };

    // This effect will make request for the videos when 
    // the searchText changes (on enter or button click).
    useEffect(() => {
        if (searchText) {
            axios.get(`http://localhost:3001/search/${searchText}`)
                .then(resp => {
                    setSearchResult(resp.data);
                    setShowResults(true);
                })
                .catch(err => console.error(err))
        }
    }, [searchText])


    const handleOutsideSearchBarClick = () => {
        setShowResults(false);
    }

    const handlePlay = (videoId, videoTitle) => {
        setShowResults(false);
        onPlayClick(videoId, videoTitle);
    }

    return (
        <OutsideClickDetector handleOutsideSearchBarClick={handleOutsideSearchBarClick}>
            <React.Fragment>
                <SearchInput handleKeyPress={handleKeyPress} handleSearchClick={handleSearchClick} />
                {/* {showResults ? <ResultList videoList={searchResult} onPlayClick={(videoId, videoTitle) => handlePlay(videoId, videoTitle)} /> : null} */}
                <ResultList videoList={searchResult} onPlayClick={(videoId, videoTitle) => handlePlay(videoId, videoTitle)} />
            </React.Fragment>
        </OutsideClickDetector>
    );
};

export default SearchBar;