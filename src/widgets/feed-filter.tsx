import React from 'react';
import styled from 'styled-components';
import { blue } from '../constants/colors';
import { useDispatch, useSelector } from '../services/hooks';
import { getPrivateFeedThunk, getPublicFeedThunk } from '../thunks';
import { FeedTypes } from '../types/types';

const FilterContainer = styled.div`
  width: 100%;
  height: 56px;
  font-size: ${({ theme: { text18Sans: { size } } }) => `${size}px`};
font-family: ${({ theme: { text18Sans: { family } } }) => family};
line-height: ${({ theme: { text18Sans: { height } } }) => `${height}px`};
font-weight: ${({ theme: { text18Sans: { weight } } }) => weight};
color: ${({ theme: { primaryText } }) => primaryText};
margin-bottom: 32px;
`;

const FilterButton = styled.button`
height: 56px;
border: none;
font: inherit;
color: inherit;
background-color: transparent;
cursor: pointer;
color: ${({ theme: { secondaryText } }) => secondaryText};

`;

const FilterButtonActive = styled.button`
height: 56px;
border: none;
font: inherit;
color: inherit;
background-color: transparent;
cursor: pointer;
border-bottom: 2px solid ${blue};
`;

const FeedFilter: React.FC = () => {
  const dispatch = useDispatch();

  const type = useSelector((state) => state.view.feedType);

  const publicType = type === FeedTypes.public;
  const privateType = type === FeedTypes.private;
  const moderationType = type === FeedTypes.moderation;

  const getPrivateFeed = () => {
    dispatch(getPrivateFeedThunk());
  };

  const getPublicFeed = () => {
    dispatch(getPublicFeedThunk());
  };

  const getModerationFeed = () => {
    //
  };

  return (
    <FilterContainer>
      {publicType && (
        <>
          <FilterButtonActive type='button' onClick={getPublicFeed}>Все посты</FilterButtonActive>
          <FilterButton type='button' onClick={getPrivateFeed}>Мои подписки</FilterButton>
          <FilterButton type='button' onClick={getModerationFeed}>На модерации</FilterButton>
        </>
      )}
      {privateType && (
        <>
          <FilterButton type='button' onClick={getPublicFeed}>Все посты</FilterButton>
          <FilterButtonActive type='button' onClick={getPrivateFeed}>Мои подписки</FilterButtonActive>
          <FilterButton type='button' onClick={getModerationFeed}>На модерации</FilterButton>
        </>
      )}
      {moderationType && (
        <>
          <FilterButton type='button' onClick={getPublicFeed}>Все посты</FilterButton>
          <FilterButton type='button' onClick={getPrivateFeed}>Мои подписки</FilterButton>
          <FilterButtonActive type='button' onClick={getModerationFeed}>На модерации</FilterButtonActive>
        </>
      )}
    </FilterContainer>
  );
};

export default FeedFilter;
