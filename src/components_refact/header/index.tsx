import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TUser } from '../../types/types';

import HeaderLoggedInView from '../header-logged-in-view';
import HeaderLoggedOutView from '../header-logged-out-view';

const Header : FC<{ currentUser : TUser, appName: string }> = ({ currentUser, appName }) => (
  <nav className='navbar navbar-light'>
    <div className='container'>

      <Link to='/' className='navbar-brand'>
        {appName.toLowerCase()}
      </Link>

      <HeaderLoggedOutView currentUser={currentUser} />

      <HeaderLoggedInView currentUser={currentUser} />
    </div>
  </nav>
);

export default Header;
