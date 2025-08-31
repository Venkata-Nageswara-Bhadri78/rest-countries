import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import DarkModeContext, { useDarkMode } from '../DarkModeContext';
const BackButton = () => {
  const { darkmode } = useDarkMode();

  return (
    <div className={`block p-[20px] ${darkmode ? 'bg-gray-900 text-white' : ''}`}>
        <Link to="/" className='block'>
          <button className={`shadow-md px-[20px] flex items-center ${darkmode ? 'bg-gray-800 text-white' : ''}`}>
            <IoIosArrowRoundBack size={50}/>
            <div className='text-[25px]'> Back</div>
          </button>
        </Link>
    </div>
  )
}

export default BackButton