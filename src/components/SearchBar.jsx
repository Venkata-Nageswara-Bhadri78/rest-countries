import React, { useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { DarkModeProvider, useDarkMode } from '../DarkModeContext';
import { CountriesContext, useCountries } from '../CountriesContext';
import CountriesList from './CountriesList';
const SearchBar = () => {
  const { countries, loading, error} = useCountries();

  const [searchCountries, setSearchCountries] = useState("");
  // const finalFilter = countries.filter(item => item.name.common==searchCountries);
  const finalFilter = countries.filter(item =>
    item.name.common.toLowerCase().includes(searchCountries.toLowerCase())
  );
  
  const { darkmode } = useDarkMode();
  return (
    <div>
    <div className={`p-[20px] text-white ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className={`gap-[30px] shadow-md flex items-center p-[20px] mx-auto w-[100%] rounded-[5px] ${darkmode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <CiSearch size={28} className=''/>
            <input onChange={(e) => {
              return(
                setSearchCountries(e.target.value)
              )
              }} value={searchCountries} className={`w-full outline-none`} type='text' placeholder={'Search for a country...'} />
        </div>
    </div>
    <CountriesList isSearchBar={true} isHomePage={false} error={error} loading={loading} countries = {finalFilter} />
    </div>
)
}

export default SearchBar