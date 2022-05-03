import React, { useEffect, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from '../services/hooks';

const ProfileFavorites:FC = () => {
  const { isLoggedIn } = useSelector((state) => state.system);
  const { username } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);
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
