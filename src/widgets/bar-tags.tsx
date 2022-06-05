import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from '../services/hooks';

import Tag from './tag';
import followTagThunk from '../thunks/follow-tag-thunk';
import unfollowTagThunk from '../thunks/unfollow-tag-thunk';
import getUserTagsThunk from '../thunks/get-user-tags-thunk';
import TagModal from './tag-modal';

type TBarTags = {
  tagList: string[];
};

type TLists = {
  isHasImage?: boolean;
  rowReverse?: boolean;
};

const Lists = styled.ul<TLists>`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-direction: ${({ rowReverse }) => rowReverse && 'row-reverse'};
  gap: 4px 24px;
  //width:526px;
  white-space: pre-line;
  padding: 0;
  @media screen and (max-width: 768px) {
    max-width: 453px;
    ${({ isHasImage }) => isHasImage && 'margin-left: -60px'}
  }
  @media screen and (max-width: 600px) {
    max-width: 352px;
    margin: 0;

    flex-direction: row;
  }
`;

Lists.defaultProps = {
  isHasImage: false,
  rowReverse: false,
};

const List = styled.li`
  list-style-type: none;
`;

const BarTags: FC<TBarTags & TLists> = ({
  tagList,
  isHasImage = false,
  rowReverse = false,
}) => {
  const currentUser = useSelector((state) => state.profile);
  const isTagFollowing = useSelector((state) => state.api.isTagFollowing);
  const isTagUnFollowing = useSelector((state) => state.api.isTagUnfollowing);
  const tagname = useSelector((state) => state.view.tag);
  const user = currentUser.username;
  const dispatch = useDispatch();
  const followingTags = useSelector((state) => state.all.followingTags);
  const handleClick = (ev: React.MouseEvent, tag: string) => {
    ev.preventDefault();
    if (followingTags && followingTags.includes(tag)) {
      dispatch(unfollowTagThunk(tag));
      setTimeout(() => {
        dispatch(getUserTagsThunk());
      }, 400);
    } else if (followingTags && !followingTags.includes(tag)) {
      dispatch(followTagThunk(tag));
      setTimeout(() => {
        dispatch(getUserTagsThunk());
      }, 400);
    }
  };
  useEffect(() => {
    if (user) {
      dispatch(getUserTagsThunk());
    }
  }, [dispatch, user]);
  return (
    <>
      {isTagFollowing && tagname && (
        <TagModal message={`Вы подписались на тег #${tagname}`} />
      )}
      {isTagUnFollowing && tagname && (
        <TagModal message={`Вы отписались от тега #${tagname}`} />
      )}
      <Lists isHasImage={isHasImage} rowReverse={rowReverse}>
        {tagList.map((tag) => (
          <List key={nanoid(10)}>
            <Tag
              tag={tag}
              isFollowing={followingTags?.includes(tag)}
              handleClick={handleClick} />
          </List>
        ))}
      </Lists>
    </>
  );
};

BarTags.defaultProps = {
  isHasImage: false,
  rowReverse: false,
};

export default BarTags;
