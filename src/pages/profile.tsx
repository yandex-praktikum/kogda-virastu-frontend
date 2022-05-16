import React, { FC, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../services/hooks';
import { calculateOffset } from '../services/helpers';
import { ProfileWidget, FeedRibbon } from '../widgets';
import {
  getPublicFeedThunk,
  getUserProfileThunk,
} from '../thunks';
import { clearView } from '../store';
import ProfilePageLayout from '../layouts/profile-page-layout';

const Profile: FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector(
    (state) => state.view.profile,
  )
    ?? {
      nickname: '',
      following: false,
      email: '',
      bio: '',
      image: '',
    };

  const isUser = useSelector(
    (state) => !!state.profile.username
      && !!state.profile.email
      && (state.profile.username === state.view.profile?.username),
  );
  const { page, perPage } = useSelector((state) => state.view);
  const statusCode = useSelector((state) => state.api.errorObject?.statusCode);
  const params = useParams<{ username: string }>();

  useEffect(() => {
    dispatch(getUserProfileThunk(params.username));

    return () => {
      dispatch(clearView());
    };
  }, [dispatch, params.username]);

  useEffect(() => {
    dispatch(getPublicFeedThunk({
      offset: calculateOffset(page, perPage),
      limit: perPage,
      author: params?.username,
    }));
  }, [dispatch, page, perPage, params.username]);

  if (statusCode === 404) {
    return <Navigate to='404' />;
  }

  return (
    <ProfilePageLayout>
      <ProfileWidget
        userName={profile.username}
        isFollow={profile.following}
        userImage={profile.image}
        isUser={isUser}
        size='large'
        distance={0}
        color='' />
      <FeedRibbon />

    </ProfilePageLayout>

  );
};

export default Profile;
