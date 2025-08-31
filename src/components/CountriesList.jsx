import React from 'react'
import { useCountries } from '../CountriesContext'
import CountriesCard from './CountriesCard';
import DarkModeContext, { useDarkMode } from '../DarkModeContext';

const CountriesList = (isHomePage) => {
    const {countries, loading, error } = useCountries();
    const displayCountries = countries.slice(0,8);

    const { darkmode } = useDarkMode();
    return (
        <div className={`md:flex md:flex-wrap ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {displayCountries.map((item, index) => {
                return (
                    <div key={index} className={`p-[50px] md:w-[50%] lg:w-[25%]`}>
                        <CountriesCard country={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;