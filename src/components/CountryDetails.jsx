import React from 'react';
import { useParams } from 'react-router-dom';
import { useCountries } from '../CountriesContext';
import DarkModeContext, { useDarkMode } from '../DarkModeContext';
const CountryDetails = () => {
  const { countries, loading, error } = useCountries();
  const { countryname } = useParams();

  const { darkmode } = useDarkMode();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const decodedName = decodeURIComponent(countryname);
  const country = countries.find(c => c.name.common === decodedName);

  if (!country) return <div>Country not found</div>;

  return (
    <div className={`block ${darkmode ? 'bg-gray-900 text-white' : ''}`}>
      <div className='md:flex w-full md:items-stretch shadow-lg pb-20'>
        {/* Left Part - Image */}
        <div className='md:w-1/2 p-[25px]'>
          <img
            className='md:w-full md:h-full'
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>

        {/* Right Part - Content */}
        <div className='md:w-1/2 md:flex md:flex-col md:justify-center md:h-full'>
          {/* Part - A */}
          <div className='text-[30px] mb-6'>
            <strong>{country.name.common}</strong>
          </div>

          {/* Part - B */}
          <div className='md:p-2 md:w-full md:flex md:flex-row md:gap-5'>
            {/* Mini Left Part */}
            <div className='md:w-1/2'>
              <div className='flex'>
                <div className='font-semibold pr-2'>Native Name: </div> {Object.values(country.name.nativeName)[0].common}
              </div>
              <div className='flex'>
                <div className='font-semibold pr-2'>Population: </div> {country.population.toLocaleString('en-US')}
              </div>
              <div className='flex'><div className='font-semibold pr-2'>Region:</div> {country.region}</div>
              <div className='flex'><div className='font-semibold pr-2'>Sub Region:</div> {country.subregion}</div>
              <div className='flex'><div className='font-semibold pr-2'>Capital:</div>{country.capital[0]}</div>
            </div>
              
            {/* Mini Right Part */}
            <div className='py-4 md:w-1/2'>
              <div className='flex'>
                <div className='font-semibold pr-2'>Top Level Domain: </div> 
                .be
              </div>
              <div className='flex'>
                  <div className='font-semibold pr-2'>Currencies: </div> 
                  {country.currencies ? Object.values(country.currencies).map(item => item.name).join(', ') : 'N/A'}
              </div>

              <div className='flex flex-row'>
                  <div className='font-semibold pr-2'>Languages: </div> 
                  {country.languages ? Object.values(country.languages).sort().join(", ") : 'N/A'}
              </div>
            </div>

          </div>

          {/* Part - C */}
          <div className='items-center p-2 md:flex'>
            <div className='font-semibold pr-2'>Border Countries: </div>
            <div className='flex gap-[10px] flex-row flex-wrap'>
              {country.borders ? country.borders.map((border, index) => (
                <div
                  key={index}
                  className={`${darkmode ? 'bg-gray-800 shadow-md' : ''} px-[30px] text-center p-[5px] shadow-md`}>
                  {border}
                </div>
              )) : ''}
            </div>
          </div>

        </div>
      </div>    
    </div>        

  );
};

export default CountryDetails;

{/*
Part 1:
          <div className='text-[30px]'>
            <strong>{country.name.common}</strong>
          </div>

Part 2:

          <div>
            <div className='flex'>
              <div className='font-semibold pr-2'>Native Name: </div> {Object.values(country.name.nativeName)[0].common}
            </div>
            <div className='flex'>
              <div className='font-semibold pr-2'>Population: </div> {country.population.toLocaleString('en-US')}
            </div>
            <div className='flex'><div className='font-semibold pr-2'>Region:</div> {country.region}</div>
            <div className='flex'><div className='font-semibold pr-2'>Sub Region:</div> {country.subregion}</div>
            <div className='flex'><div className='font-semibold pr-2'>Capital:</div>{country.capital[0]}</div>
          </div>

Part 3:

<div className='py-4'>
              <div className='flex'>
                <div className='font-semibold pr-2'>Top Level Domain: </div> 
                .be
              </div>
              <div className='flex'>
                  <div className='font-semibold pr-2'>Currencies: </div> 
                  {country.currencies ? Object.values(country.currencies).map(item => item.name).join(', ') : 'N/A'}
              </div>

              <div className='flex flex-row'>
                  <div className='font-semibold pr-2'>Languages: </div> 
                  {country.languages ? Object.values(country.languages).sort().join(", ") : 'N/A'}
              </div>
            </div>
  
*/}
{/* 

  Part 4:

<div className='items-center py-5'>
          <div className='font-semibold pr-2'>Border Countries: </div>
          <div className='flex gap-[10px] flex-row flex-wrap'>
            {country.borders ? country.borders.map((border, index) => (
              <div
                key={index}
                className={`${darkmode ? 'bg-gray-800 shadow-md' : ''} px-[30px] text-center p-[5px] shadow-md`}>
                {border}
              </div>
            )) : ''}
          </div>
        </div> */}


        // <div className='px-[25px] leading-loose'>

          


        // </div>