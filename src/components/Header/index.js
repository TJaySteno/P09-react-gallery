import React from 'react';
import { Route } from 'react-router-dom';

import SearchForm from './SearchForm';
import MainNav from './MainNav';

const Header = () =>
  <header>
    <Route component={SearchForm} />
    <MainNav />
  </header>

export default Header;
