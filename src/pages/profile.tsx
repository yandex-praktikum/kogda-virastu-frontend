import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../services/hooks';
import { calculateOffset } from '../services/helpers';
import { ProfileWidget, FeedRibbon } from '../widgets';
import {
  getPublicFeedThunk,
  getUserProfileThunk,
  addLikeThunk,
  deleteLikeThunk,
  deleteArticleThunk,
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
  const { page, perPage, feed } = useSelector((state) => state.view);
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

  const onLikeClick = (isLiked: boolean, slug:string): void => {
    if (isLiked) {
      dispatch(deleteLikeThunk(slug));
    } else {
      dispatch(addLikeThunk(slug));
    }
  };
  const deleteArticle = (slug: string): void => {
    dispatch(deleteArticleThunk(slug));
  };

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

/* {feed?.map((item) => (
  <ArticleFullPreview
    article={item}
    isAuthor={isUser}
    onLikeClick={() => onLikeClick(item.favorited, item.slug)}
    onDeleteClick={() => deleteArticle(item.slug)} />
))} */
