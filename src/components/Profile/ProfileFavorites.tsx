import React, { FC } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { UserArticlesTypes } from '../../types/types';
import { setArtistProfile } from '../../store';
export const ProfileFavorites:FC = () => {
    const dispatch = useDispatch();
    const { articlesType } = useSelector((state) => state.view);
    const onClick = (evt: React.MouseEvent) => {
        evt.preventDefault();
          dispatch(setArtistProfile(UserArticlesTypes.favorite));
    }
    return (
        <li className='nav-item'>
          <button
            type='button'
            className={ articlesType === UserArticlesTypes.favorite ? 'nav-link active' : 'nav-link'}
            onClick={onClick}>
            Favorited Articles
          </button>
        </li>
      );
}

export default ProfileFavorites;
