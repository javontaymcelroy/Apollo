import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';
import banner from '../assets/Middle_Banner.png';
import logo from '../assets/Logo.png';

const Navigation = () => {
  return (
    <>
      <div className='Nav'>
        <NavLink to='/science' className='links'>
          Science
        </NavLink>
        <NavLink to='/tech' className='links'>
          Tech
        </NavLink>
        <NavLink to='/gaming' className='links'>
          Gaming
        </NavLink>
        <NavLink to='/entertainment' className='links entertainment'>
          Entertainment
        </NavLink>
        <NavLink to='/finance' className='links'>
          Finance
        </NavLink>
        <NavLink to='/sports' className='links'>
          Sports
        </NavLink>
        <NavLink to='/programming' className='links'>
          Programming
        </NavLink>
        <NavLink to='/world' className='links'>
          World
        </NavLink>
      </div>
      <img src={banner} alt='banner' className='banner' />
      <img src={logo} alt='logo' className='logo' />
    </>
  );
};

export default Navigation;
