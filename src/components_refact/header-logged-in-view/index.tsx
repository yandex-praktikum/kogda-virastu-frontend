import {FC} from 'react';
import { Link } from 'react-router-dom';
import { TUser } from '../../types/types';


const HeaderLoggedInView: FC<{currentUser : TUser}> = ({currentUser}) => {
  if (currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${currentUser.username}`}
            className="nav-link">
            <span>Hello, {currentUser.username}</span>
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

export default HeaderLoggedInView;