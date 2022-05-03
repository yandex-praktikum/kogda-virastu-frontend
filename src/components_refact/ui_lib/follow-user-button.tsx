import React, { FC, useCallback } from 'react';
import { TProfile } from '../../types/types';

export const FollowUserButton: FC<{ isUser: boolean, user: TProfile, follow: () => void, unfollow: () => void }> = ({
  isUser, user, follow, unfollow,
}) => {
  if (isUser) {
    return null;
  }

  let classes = 'btn btn-sm action-btn';
  if ( user?.following ) {
    classes += ' btn-secondary';
  } else {
    classes += ' btn-outline-secondary';
  }

  const handleClick = useCallback((ev: React.MouseEvent) => {
    ev.preventDefault();
    if ( user.following ) {
      unfollow();
    } else {
      follow();
    }
  }, []);

  return (
    <button
      className={classes}
      onClick={handleClick}>
      <i className='ion-plus-round' />
      &nbsp;
      { user?.following ? 'Unfollow' : 'Follow'}
      {' '}
      { user?.username }
    </button>
  );
};
