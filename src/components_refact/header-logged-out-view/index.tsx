import {FC} from 'react';
import { Link } from 'react-router-dom';
import { TUser } from '../../types/types';

const HeaderLoggedOutView : FC<{currentUser : TUser}> = ({currentUser}) => {
  if (!currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

export default HeaderLoggedOutView;