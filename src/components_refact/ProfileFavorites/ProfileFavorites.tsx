import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/hooks';

export const ProfileFavorites = () => {
  const { isLoggedIn } = useSelector((state) => state.system);
  const { username } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
    //  dispatch({ type: PROFILE_PAGE_UNLOADED })
  }, [isLoggedIn]);
  return (
    <ul className='nav nav-pills outline-active'>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to={`/@${username}`}>
          My Articles
        </Link>
      </li>

      <li className='nav-item'>
        <Link
          className='nav-link active'
          to={`/@${username}/favorites`}>
          Favorited Articles
        </Link>
      </li>
    </ul>
  );
};

export default ProfileFavorites;
