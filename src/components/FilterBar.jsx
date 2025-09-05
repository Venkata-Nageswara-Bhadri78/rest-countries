import React, { useState } from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";
import { DarkModeProvider, useDarkMode } from '../DarkModeContext';
import CountriesList from './CountriesList';

const FilterBar = ({ error, loading, countries }) => {
  
  const { darkmode } = useDarkMode();

  const countriesList = [...new Set(
    countries.map(country => country.region)
  )].sort().slice(0, 5);
  
  const [filterInput, setFilterInput] = useState("");

  const filteredcountries = countries.filter(
    item => item.region.toLowerCase() === filterInput.toLowerCase()
  );
    return (
      <div>
        <div className={`p-[20px] ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
          <div className={`p-[10px] rounded-[5px] flex items-center justify-between shadow-md ${darkmode ? 'bg-gray-800 text-white' : ''}`}>
              <select 
                onChange={(e) => {setFilterInput(e.target.value)}}
                className={`appearance-none w-full outline-none cursor-pointer`}
                defaultValue=""
              >
                  <option disabled className='indent-4' value="">Filter by Region</option>
                  
                  {countriesList.map(region => {
                          return <option className='indent-4' key={region} value={region}>{region}</option>
                      })
                  }
              </select>
              <RiArrowDropDownLine size={40} />
          </div>
        </div>
        <CountriesList error={error} loading={loading} countries={filteredcountries} isHomePage={false}/>
      </div>

  )
}

export default FilterBar
