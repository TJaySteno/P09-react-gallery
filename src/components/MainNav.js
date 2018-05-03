import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainNav = () =>
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/beach'>Beach</NavLink></li>
      <li><NavLink to='/moutains'>Mountain</NavLink></li>
      <li><NavLink to='/forest'>Forest</NavLink></li>
      <li><NavLink to='/sunset'>Sunset</NavLink></li>
      <li><NavLink to='/lake'>Lake</NavLink></li>
    </ul>
  </nav>

export default MainNav;
