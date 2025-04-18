import React from 'react'

function Search({ searchTerm, setSearchTerm }) {
  return (
   <div className='search'>
    <div>
      <img src="search.svg" alt="Search" />
      <input 
      type="text"
      placeholder='Seach through thousands of movies'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
       />
    </div>
   </div>
  )
}

export default Search