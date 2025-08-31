import React from 'react'

import DarkModeContext, { useDarkMode } from '../DarkModeContext'
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdDarkMode } from "react-icons/md";

const DarkModeButton = () => {
  const {darkmode, toggleDarkMode} = useDarkMode();

  return (
    <button 
      onClick={toggleDarkMode} 
      className={`flex p-[10px] items-center gap-2 rounded-[10px]`}>
        
        {darkmode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        <div>Dark Mode</div>
    </button>
  );
};

export default DarkModeButton;