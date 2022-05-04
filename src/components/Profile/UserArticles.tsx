import React, { FC } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { UserArticlesTypes } from '../../types/types';
import { setArtistProfile } from '../../store';

const UserArticles:FC = () => {
  const dispatch = useDispatch();
  const { articlesType } = useSelector((state) => state.view);

  const onClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(setArtistProfile(UserArticlesTypes.my));
  };
  return (
    <li className='nav-item'>
      <button
        type='button'
        className={articlesType === UserArticlesTypes.my ? 'nav-link active' : 'nav-link'}
        onClick={onClick}>
        My Articles
      </button>
    </li>
  );
};
export default UserArticles;
