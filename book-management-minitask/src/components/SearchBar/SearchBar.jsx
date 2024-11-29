import React, { useState } from 'react'
import './SearchBar.css'
import { books } from '../../utils/utils';

const SearchBar = ({onSearch}) => {
  const [text,setText] = useState('');

  const handleFilter = ()=>{
    onSearch(text);
    // console.log('Search triggered', text);
    // setText(''); // Reset the input field after searching
  }
  return (
    <div className="searchbar" id='searchbar'>
        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Search..." />
        <button onClick={handleFilter}>Search</button>
    </div>
  )
}

export default SearchBar