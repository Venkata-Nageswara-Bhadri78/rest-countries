import React, { useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'
import CountriesList from '../components/CountriesList'

import { useDarkMode } from '../DarkModeContext'
import { useCountries } from '../CountriesContext'

const HomePage = () => {
  const { darkmode } = useDarkMode()
  const [searchCountries, setSearchCountries] = useState("")
  const { countries, loading, error } = useCountries()

  const finalCountries = searchCountries
    ? countries.filter(item =>
        item.name.common.toLowerCase().includes(searchCountries.toLowerCase())
      )
    : countries

  return (
    <div className="">
      <Header />
      <div
        className={`${darkmode ? 'bg-gray-900' : 'bg-white'} md:flex md:justify-between`}
      >
        <SearchBar
          searchCountries={searchCountries}
          setSearchCountries={setSearchCountries}
        />
        {/* <FilterBar error={error} loading={loading} countries={countries}/> */}
      </div>
      <CountriesList
        error={error}
        loading={loading}
        countries={finalCountries}
        isHomePage={true}
      />
    </div>
  )
}

export default HomePage
