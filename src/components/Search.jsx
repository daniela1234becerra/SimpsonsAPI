import React from 'react';
import '../index.css';
import '../App.css'

const Search = ({ handleSearch }) => {
  return (
    <div className='main'>
      <div className='main-container'>
        <h3 className='discover-title'>Discover some Simpsons quotes</h3>
        <input type="text" placeholder='Search' className='search-bar' onChange={handleSearch} />
      </div>
    </div>
  );
};

export { Search };