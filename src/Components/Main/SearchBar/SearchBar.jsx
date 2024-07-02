import React from 'react';
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa";

const SearchBar = ({ setSearchedValue }) => {

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    const handleSearchChange = (e) =>{
        setSearchedValue(e.target.value.toLowerCase());
    }
    return (
        <form className='searchBar-form' onSubmit={handleSubmit} > 
            <input 
                className='searchBar-input'
                type="text" 
                id='search'
                onChange={handleSearchChange}                
            />
            <button className='search-button'>
        <FaSearch/>
            </button>
        </form>
    );
};

export default SearchBar;