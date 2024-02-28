import React from 'react';
import logoSimpsons from '../img/logoSimpsons.png';
import menu from '../img/menu.png';
import '../index.css';
import '../App.css'
import '../App'



const Header = ({handleLogoClick}) => {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <img src={logoSimpsons} alt="Logo Simpsons" className='logo' onClick={handleLogoClick} />
        <img src={menu} alt="Menu" className='menu' />
      </div>
    </div>
  );
};

export {Header};