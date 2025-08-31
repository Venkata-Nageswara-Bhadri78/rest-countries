import React from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";
import { DarkModeProvider, useDarkMode } from '../DarkModeContext';

const FilterBar = ({ countries }) => {
  
  const { darkmode } = useDarkMode();

  const countriesList = countries.map(country => {
      return country.name.common
  }).sort().slice(0, 5);
  
  return (
    <div className={`p-[20px] ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className={`p-[10px] rounded-[5px] flex items-center justify-between shadow-md ${darkmode ? 'bg-gray-800 text-white' : ''}`}>
            <select className={`appearance-none w-full outline-none cursor-pointer`}
                defaultValue=""
            >
                <option disabled className='indent-4' value="">Filter by Region</option>
                
                {countriesList.map(country => {
                        return <option className='indent-4' key={country} value={country}>{country}</option>
                    })
                }
            </select>
            <RiArrowDropDownLine size={40} />
        </div>
    </div>
  )
}

export default FilterBar

/*

import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = () => {
  return (
    <div className="relative w-64">
      <select
        className="appearance-none shadow-md w-full p-3 pr-10 rounded-md border outline-none cursor-pointer"
        defaultValue=""
        required
      >
        <option value="" disabled>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-2xl" />
    </div>
  );
};

export default Dropdown;

*/