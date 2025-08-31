import React from 'react'

import { CiSearch } from "react-icons/ci";
import { DarkModeProvider, useDarkMode } from '../DarkModeContext';
const SearchBar = () => {
  const { darkmode } = useDarkMode();
  return (
    <div className={`p-[20px] text-white ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className={`gap-[30px] p-[20px] shadow-md flex items-center p-[20px] mx-auto w-[100%] rounded-[5px] ${darkmode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <CiSearch size={28} className=''/>
            <input className={`w-full outline-none`} type='text' placeholder={'Search for a country...'} />
        </div>
    </div>
  )
}

export default SearchBar