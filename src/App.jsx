import React, { useContext } from 'react'
import { useState, useEffect } from 'react'

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';

import { CountriesContext, CountriesProvider } from './CountriesContext';

import { useCountries } from './CountriesContext';
import CountriesCard from './components/CountriesCard';
// import CountriesList from './components/CountriesList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BackButton from './components/BackButton';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import CountryDetailsPage from './pages/CountryDetailsPage';
const App = () => {

  const { countries, loading, error } = useCountries();

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error in fetching data</h2>;

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country/:countryname' element={<CountryDetailsPage />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
