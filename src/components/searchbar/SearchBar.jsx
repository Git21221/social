import React from 'react'
import Input from '../Input/Input'
import SearchIcon from '@mui/icons-material/Search';
import './Searchbar.css'

function SearchBar() {
  return (
    <>
      <div className="searchbar flex justify-center items-center gap-4 w-auto bg-neutral-50 px-4 py-2 m-5 rounded-2xl">
        <div className="searchLogo">
        <SearchIcon />
        </div>
        <div className="searchbar">
        <Input placeholder="Search in social..." className="bg-transparent focus:outline-none"/>
        </div>
        <div className="filters uppercase text-sm font-medium">
          filters
        </div>
      </div>
    </>
  )
}

export default SearchBar