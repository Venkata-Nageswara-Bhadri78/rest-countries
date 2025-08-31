import React, { useContext } from 'react'
import { CountriesProvider, useCountries } from '../CountriesContext'
import { Link } from 'react-router-dom';
import DarkModeContext, { useDarkMode } from '../DarkModeContext';
const CountriesCard = ({ country }) => {
    const { darkmode } = useDarkMode();
  return (
    <Link to={`/country/${country.name.common}`} className='h-full'>
        <div className={`cursor-pointer rounded-[10px] shadow-lg flex flex-col h-full`}>
            <div className={`${darkmode ? 'bg-gray-800 text-white rounded-[10px]' : ''}`}>
                <div>
                    <img className='w-full h-40 rounded-t-[10px]' src={country.flags.png} alt={country.flags.alt} width='100%' />
                </div>
                <div>
                    <div className='p-[20px]'>
                        <div className='text-[25px]'><strong>{country.name.common}</strong></div>
                    </div>
                    <div className='w-[100%] leading-relaxed pl-[20px] pb-[40px]'>
                        <div className='flex gap-1.5'><div className='font-semibold'>Population: </div> {country.population.toLocaleString()}</div>
                        <div className='flex gap-1.5'><div className='font-semibold'>Region: </div> {country.region}</div>
                        <div className='flex gap-1.5'><div className='font-semibold'>Capital: </div> {country.capital[0]}</div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CountriesCard;
