import React from 'react'

import { MdOutlineDarkMode } from "react-icons/md";
import DarkModeContext, { useDarkMode } from '../DarkModeContext';
import DarkModeButton from './DarkModeButton';
const Header = () => {
  const { darkmode, toggleDarkMode} = useDarkMode();

  return (
    <div className={`p-[20px] shadow-md flex items-center justify-between ${darkmode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
        <div className='text-[20px]'><strong>Where in the world?</strong></div>
        <DarkModeButton />
    </div>
  )
}

export default Header