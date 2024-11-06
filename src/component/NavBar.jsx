import React from 'react';
import darkmode from "../assets/darkmode.svg";
import grid from '../assets/grid.svg';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import icon from '../assets/Icon.svg';
import { useDarkMode } from './DarkModeContext';

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div 
      className={`flex justify-between items-center  mx-auto px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}
      style={{
        width: '100%',
        maxWidth: '1344px',
        height: '56px',
        padding: '12px 0',
        gap: '0px',
        opacity: '1'
      }}
    >
      <div className="flex items-center">
        <button>
          <img src={menu} alt="menu" className={`w-6 h-6 ${darkMode ? 'filter invert' : ''}`} />
        </button>
        <div className="ml-4 text-xl font-bold flex items-center space-x-2">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <img src={icon} alt="icon" className={`w-6 h-6 ${darkMode ? 'filter invert' : ''}`} />
        </button>
        <button>
          <img src={grid} alt="grid" className={`w-6 h-6 ${darkMode ? 'filter invert' : ''}`} />
        </button>
        <button 
          onClick={toggleDarkMode}
          style={{
            backgroundColor: darkMode ? '#4CAF50' : '', 
            borderRadius: '50%',
            padding: '8px',
          }}
        >
          <img 
            src={darkmode} 
            alt="Dark Mode" 
            className={`w-6 h-6 ${darkMode ? 'filter invert' : ''}`} 
            style={{ filter: darkMode ? 'none' : 'invert(0)' }}
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
