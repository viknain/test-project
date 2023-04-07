import React from "react"
import './search.css'


const Search = ({ handleChange, searchValue }) => {
    return (
        <input placeholder="search" className="search" value={searchValue} onChange={(e) => handleChange(e)} />
    )
}


export default Search