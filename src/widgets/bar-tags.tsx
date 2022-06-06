import React, { FC } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from '../services/hooks';
import { followTagThunk, unfollowTagThunk } from '../thunks';
import { setFollowTags } from '../store';

import Tag from './tag';

type TBarTags = {
  tagList: string[],
};

type TLists = {
  isHasImage?: boolean,
  rowReverse?: boolean;
};

const Lists = styled.ul<TLists>`
    display: flex;
    box-sizing:border-box;
    flex-wrap:wrap;
    //flex-direction: ${({ rowReverse }) => rowReverse && 'row-reverse'};
    gap: 4px 24px;
    white-space: pre-line;
    padding:0;
    // @media screen and (max-width:768px) {
    //     ${({ isHasImage }) => isHasImage && 'margin-left: -60px'}
    //  }
     @media screen and (max-width:600px) {
        margin:0;
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

const BarTags: FC<TBarTags & TLists> = ({ tagList, isHasImage = false, rowReverse = false }) => {
  const { followTags } = useSelector((state) => state.view);
  const { isLoggedIn } = useSelector((state) => state.system);
  const dispatch = useDispatch();
  const handleClick = (evt:React.MouseEvent, tag: string) => {
    evt.preventDefault();
    if (followTags && isLoggedIn && followTags.includes(tag)) {
      dispatch(unfollowTagThunk(tag));
      dispatch(setFollowTags(followTags.filter((el) => el !== tag)));
    } else if (followTags && isLoggedIn) {
      dispatch(followTagThunk(tag));
      dispatch(setFollowTags([...followTags, tag]));
    } else {
      dispatch(followTagThunk(tag));
      dispatch(setFollowTags([tag]));
    }
  };

  return (
    <Lists isHasImage={isHasImage} rowReverse={rowReverse}>
      {tagList.map((tag) => (
        <List key={nanoid(10)}>
          <Tag
            tag={tag}
            pointer
            handleClick={handleClick}
            isFollowing={followTags?.includes(tag) || false} />
        </List>
      ))}
    </Lists>
  );
};

BarTags.defaultProps = {
  isHasImage: false,
  rowReverse: false,
};

export default BarTags;
