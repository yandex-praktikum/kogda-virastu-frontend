import React, { FC } from 'react';
import { batch } from 'react-redux';
import { useDispatch, useSelector } from '../services/hooks';
import { setFeedType, setTag, clearTag } from '../store';
import { FeedTypes } from '../types/types';
import Tag from './tag';
import styled, { useTheme } from 'styled-components';

type TTitleProps = {
  color: string,
  fontSize: number
}

const Title = styled.h2<TTitleProps>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize}px;
    margin-bottom: 16px;
  ;`

const TagList = styled.div`
  max-width: 360px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
`;

const Tags: FC = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.all);
  const { tag: activeTag } = useSelector((state) => state.view)
  const theme = useTheme();

  const handleClick = (ev:React.MouseEvent, tag: string) => {
    ev.preventDefault();
    batch(() => {
      dispatch(setTag(tag));
      dispatch(setFeedType(FeedTypes.tags));
    });
  };

  const inactiveTag = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(clearTag());
  }

  if (tags) {
    return (
      <div>
        <Title color={theme.primaryText} fontSize={theme.thirdLevelHeading.size} >Популярные теги</Title>
        <TagList>
          {
            tags.map((tag) => {
              return (
                <Tag tag={tag} handleClick={handleClick} active={tag === activeTag} inactiveTag={inactiveTag} />
              );
            })
          }
        </TagList>
      </div>
      
    );
  }
  return (
    <div>Loading Tags...</div>
  );
};
export default Tags;
