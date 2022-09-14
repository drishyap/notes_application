import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({setSearchText}) => {
    const handleChange = e => {
        setSearchText(e.target.value);
    }

    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input onChange={handleChange} type="text" placeholder="Type to search notes..."/>
        </div>
    );
};

export default Search;
