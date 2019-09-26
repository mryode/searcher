import React from 'react';

const SearchInput = ({ inputRef, buttonRef, handleKeyPress, handleSearchClick }) => {

    return (
        <div className="search-input">
            <input
                ref={inputRef}
                type="text"
                placeholder="Search on YouTube"
                onKeyPress={handleKeyPress}
            />
            <button
                ref={buttonRef}
                className="search-btn"
                onClick={() => handleSearchClick(inputRef.current.value)}
            >
                Search
            </button>
        </div>
    );
};

export default SearchInput;
