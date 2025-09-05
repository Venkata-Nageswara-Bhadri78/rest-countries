import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import CountriesList from '../components/CountriesList'

import DarkModeContext, { useDarkMode } from '../DarkModeContext'
import { CountriesContext, useCountries } from '../CountriesContext';

const HomePage = () => {
    const { darkmode } = useDarkMode();

    const {countries, loading, error } = useCountries();
    return (
        <>
            <div className=''>
                <Header />
                <div className={`${darkmode ? 'bg-gray-900' : 'bg-white'} md:flex md:justify-between`}>
                    <SearchBar />
                    {/* <FilterBar error={error} loading={loading} countries={countries}/> */}
                </div>
                <CountriesList error={error} loading={loading} countries={countries} isHomePage={true}/>
            </div>
        </>
    )
}

export default HomePage