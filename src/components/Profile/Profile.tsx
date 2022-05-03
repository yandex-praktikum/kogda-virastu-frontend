import React, { FC, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/hooks';
import { EditProfileSettings, FollowUserButton } from '../../components_refact/index';
import { calculateOffset } from '../../services/helpers';
import { UserArticlesTypes } from '../../types/types';
import ArticleList from '../ArticleList';
import { getUserProfileThunk, getPublicFeedThunk } from '../../thunks';
import {
  unfollowProfileThunk,
  followProfileThunk,
} from '../../thunks';
import {UserArticles} from './UserArticles';
import {ProfileFavorites} from './ProfileFavorites'

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(state => state.profile)
  const { profile } = useSelector(state => state.view)
  const { isLoggedIn } = useSelector(state => state.system)
  const { page, perPage, articlesType } = useSelector(state => state.view)
  const params = useParams<{ username: string }>()


  useEffect(() => {
    dispatch(getUserProfileThunk(params.username))

  }, [dispatch]);


  useEffect(() => {
    if(UserArticlesTypes.my) {
      dispatch(getPublicFeedThunk({ offset: calculateOffset(page, perPage), limit: perPage, author: params.username }))
    }
      else {
        dispatch(getPublicFeedThunk({ offset: calculateOffset(page, perPage), limit: perPage, author: params.username, favorited:'true' }))
      }
  }, [dispatch, page, articlesType])

  const onFollow = () => {
    dispatch(followProfileThunk());
  };

  const onUnfollow = () => {
    dispatch(unfollowProfileThunk());
  };

  const renderTabs = useCallback(() => (
    <ul className='nav nav-pills outline-active'>
      <UserArticles />
      <ProfileFavorites />
    </ul>
  ), [profile?.username]);





  return (
    <div className='profile-page'>

      <div className='user-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 offset-md-1'>

              <img src={profile?.image} className='user-img' alt={profile?.username} />
              <h4>{profile?.username}</h4>
              <p>{profile?.bio}</p>

              {params.username?.slice(1) === username && <EditProfileSettings isUser={isLoggedIn} />}


              {params.username?.slice(1) !== username && <FollowUserButton
                isUser={isLoggedIn}
                user={profile!}
                follow={onFollow}
                unfollow={onUnfollow} />}



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

            <ArticleList />
          </div>

        </div>
      </div>

    </div>
  );
};


