import React from 'react';
import { DarkModeProvider } from './component/DarkModeContext';
import NavBar from './component/NavBar';
import MainSection from './component/MainSection';
import Sidebar from './component/SideBar';

function App() {
  return (
    <DarkModeProvider>
      <div>
        <NavBar />
        <div className='flex'><Sidebar />
        <MainSection /></div>
        
      </div>
    </DarkModeProvider>
  );
}

export default App;
