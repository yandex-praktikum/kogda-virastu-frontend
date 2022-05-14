import React, { FC } from 'react';
import { batch } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { setFeedType, setTag, clearTag } from '../store';
import { FeedTypes } from '../types/types';
import Tag from './tag';

const Title = styled.h3`
    color: ${({ theme }) => theme.primaryText};
    font-size: ${({ theme }) => theme.thirdLevelHeading.size}px;
    font-family: ${({ theme }) => theme.thirdLevelHeading.family};
    font-weight: ${({ theme }) => theme.thirdLevelHeading.weight};
    line-height: ${({ theme }) => theme.thirdLevelHeading.height}px;
    margin-bottom: 16px;
  ;`;

const TagList = styled.div`
  max-width: 360px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
`;

const PopularTags: FC = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.all);
  const { tag: activeTag } = useSelector((state) => state.view);
  const theme = useTheme();

  const handleClick = (ev:React.MouseEvent, tag: string) => {
    ev.preventDefault();
    batch(() => {
      dispatch(setTag(tag));
      dispatch(setFeedType(FeedTypes.tags));
    });
  };

  const deactivateTag = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(clearTag());
  };

  if (tags) {
    return (
      <div>
        <Title>Популярные теги</Title>
        <TagList>
          {
            tags.map((tag) => (
              <Tag tag={tag} handleClick={handleClick} isActive={tag === activeTag} deactivateTag={deactivateTag} />
            ))
          }
        </TagList>
      </div>

    );
  }
  return (
    <div>Loading Tags...</div>
  );
};
export default PopularTags;
