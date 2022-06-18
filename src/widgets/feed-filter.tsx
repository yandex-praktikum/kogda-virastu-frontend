import React from 'react';
import styled from 'styled-components';
import { blue } from '../constants/colors';
import { useDispatch, useSelector } from '../services/hooks';
import { getPrivateFeedThunk, getPublicFeedThunk } from '../thunks';
import { FeedTypes } from '../types/types';

const FilterConteiner = styled.div`
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

  const getPrivateFeed = () => {
    dispatch(getPrivateFeedThunk());
  };

  const getPublicFeed = () => {
    dispatch(getPublicFeedThunk());
  };

  return (
    <FilterConteiner>
      {type === FeedTypes.public ? (
        <>
          <FilterButtonActive type='button' onClick={getPublicFeed}>Все посты</FilterButtonActive>
          <FilterButton type='button' onClick={getPrivateFeed}>Мои подписки</FilterButton>
        </>
      ) : (
        <>
          <FilterButton type='button' onClick={getPublicFeed}>Все посты</FilterButton>
          <FilterButtonActive type='button' onClick={getPrivateFeed}>Мои подписки</FilterButtonActive>
        </>
      )}
    </FilterConteiner>
  );
};

export default FeedFilter;