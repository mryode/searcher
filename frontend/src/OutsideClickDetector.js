import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Component that alerts if you click outside of it
 */
const OutsideClickDetector = ({ children, handleOutsideSearchBarClick }) => {
    const wrapperRef = useRef(null);
    useOutsideClickDetector(wrapperRef, handleOutsideSearchBarClick);

    return <div ref={wrapperRef}>{children}</div>;
}

const useOutsideClickDetector = (ref, handleOutsideSearchBarClick) => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            handleOutsideSearchBarClick();
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

OutsideClickDetector.propTypes = {
    children: PropTypes.element.isRequired
};

export default OutsideClickDetector;
