import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = ({ isDarkMode, setIsDarkMode }) => {    
    return (
        <div className="header">
            <h1>Notes</h1>
            <DarkModeToggle
                // onClick={() =>
                //     setDarkMode(
                //         (previousDarkMode) => !previousDarkMode
                //     )
                // }
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={70}
            />
        </div>
    );
};

export default Header;
