import React, { FC, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from '../services/hooks';
import { EditProfileSettings, FollowUserButton, ArticleList } from '../components_refact/index';
import { calculateOffset } from '../services/helpers';

import { getUserProfileThunk } from '../thunks';
import {
  unfollowProfileThunk,
  followProfileThunk,
} from '../thunks'

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(state => state.profile)
  const { profile } = useSelector(state => state.view)
  const { isLoggedIn } = useSelector(state => state.system)
  const { articles } = useSelector(state => state.all)

  const params = useParams<{ username: string }>()

  /* const calculateOffset = (page : number, qty : number) : number => qty * (page - 1); 
  
  export const fetchPublicFeed : IFetchArticles = (
  limit?: number,
  offset?: number,
  tag?: string,
  author?: string,
  favorited?: string,
) : AxiosPromise<TAPIArticles> => {
  const requestConfig : AxiosRequestConfig = {
    url: ARTICLES_ROUTE,
    params: makeParams(limit, offset, tag, author, favorited),
    method: 'get',
  };
  return blogAPI(injectBearerToken(requestConfig));
};

export const fetchPrivateFeed : IFetchFeed = (
  limit?: number,
  offset?: number,
  tag?: string,
) : AxiosPromise<TAPIArticles> => {
  const requestConfig : AxiosRequestConfig = {
    url: FEED_ROUTE,
    params: makeParams(limit, offset, tag),
    method: 'get',
  };
  return blogAPI(injectBearerToken(requestConfig));
};
  
  
  */

  useEffect(() => {
    dispatch(getUserProfileThunk(params.username))

  }, [dispatch]);

  const onFollow = () => {
    dispatch(followProfileThunk());
  };

  const onUnfollow = () => {
    dispatch(unfollowProfileThunk());
  };

  const renderTabs = useCallback(() => (
    <ul className='nav nav-pills outline-active'>
      <li className='nav-item'>
        <Link
          className='nav-link active'
          to={`/@${profile?.username}`}>
          My Articles
        </Link>
      </li>

      <li className='nav-item'>
        <Link
          className='nav-link'
          to={`/@${profile?.username}/favorites`}>
          Favorited Articles
        </Link>
      </li>
    </ul>
  ), [profile?.username]);


  /*  if (!isLoggedIn) {
     return null;
   } */


  return (
    <div className='profile-page'>

      <div className='user-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 offset-md-1'>

              <img src={profile?.image} className='user-img' alt={profile?.username} />
              <h4>{profile?.username}</h4>
              <p>{profile?.bio}</p>

              <EditProfileSettings isUser={isLoggedIn} />
              <FollowUserButton
                isUser={isLoggedIn}
                user={profile!}
                follow={onFollow}
                unfollow={onUnfollow} />

            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-xs-12 col-md-10 offset-md-1'>

            <div className='articles-toggle'>
              {username === profile?.username && renderTabs()}
            </div>

            <ArticleList/>
          </div>

        </div>
      </div>

    </div>
  );
};


///в артикал лист нужно танк, и настроить лист пагинатион, сделать артикл компонент