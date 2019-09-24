import React, { useRef } from 'react';

const SearchInput = ({ handleKeyPress, handleSearchClick }) => {

    const input = useRef(null);

    return (
        <div className="search-input">
            <input
                ref={input}
                type="text"
                placeholder="Search on YouTube"
                onKeyPress={handleKeyPress}
            />
            <button
                className="search-btn"
                onClick={() => handleSearchClick(input.current.value)}
            >
                Search
            </button>
        </div>
    );
};

export default SearchInput;
