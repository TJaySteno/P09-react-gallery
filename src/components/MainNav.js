import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () =>
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/search/beach'>Beach</NavLink></li>
      <li><NavLink to='/search/forest'>Forest</NavLink></li>
      <li><NavLink to='/search/lake'>Lake</NavLink></li>
      <li><NavLink to='/search/mountain'>Mountain</NavLink></li>
      <li><NavLink to='/search/waterfall'>Waterfall</NavLink></li>
    </ul>
  </nav>

export default MainNav;
