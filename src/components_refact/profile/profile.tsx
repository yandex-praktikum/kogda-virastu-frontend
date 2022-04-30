import React, { FC, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/hooks';
import { EditProfileSettings, FollowUserButton, ArticleList } from '../index';

import { getUserProfileThunk } from '../../thunks';
import { unfollowProfileThunk,
  followProfileThunk,} from '../../thunks'

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const { username, image, bio } = useSelector((state) => state.profile);
  const{profile} = useSelector(state=> state.view)
  const { isLoggedIn } = useSelector(state => state.system)
  const { articles } = useSelector(state => state.all)
  const {isUserFetching} = useSelector(state=> state.api)
console.log(isUserFetching)

  useEffect(() => {
    if (true) {
      dispatch(getUserProfileThunk())
    }
  },[dispatch]);

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
          to={`/@${username}`}>
          My Articles
        </Link>
      </li>

      <li className='nav-item'>
        <Link
          className='nav-link'
          to={`/@${username}/favorites`}>
          Favorited Articles
        </Link>
      </li>
    </ul>
  ), [username]);


  /*  if (!isLoggedIn) {
     return null;
   } */


  return (
    <div className='profile-page'>

      <div className='user-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 offset-md-1'>

              <img src={image!} className='user-img' alt={username!} />
              <h4>{username}</h4>
              <p>{bio}</p>

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
              {renderTabs()}
            </div>

            <ArticleList
              /*   pager={pager} */
              articles={articles!}
              articlesCount={5}
             /*  state={currentPage}  */ />
          </div>

        </div>
      </div>

    </div>
  );
};
