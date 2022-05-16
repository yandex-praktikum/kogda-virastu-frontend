import React, { FC } from 'react';
import styled from 'styled-components';
import { mobileViewThreshold } from '../constants';
import { useSelector } from '../services/hooks';
import { TArticle } from '../types/types';
import BriefPostAnnounceWidget from './brief-post-announce-widget';
import { Divider, HeaderThreeText } from '../ui-lib';
import { TTopAnnounceWidgetProps } from '../types/widgets.types';

const TopAnnounce = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const TopContainer = styled.ul`
  min-width: 220px;
  max-width: 359px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  
  @media screen and (max-width: 760px) {
    display: none;
    }
`;

export const TopAnnounceWidget : FC<TTopAnnounceWidgetProps> = ({ caption }) => {
  const topArticles = useSelector((state) => state.view.topFeed) ?? [];
  return (
    <TopAnnounce>
      <HeaderThreeText paddingCSS='padding-bottom: 24px;'>
        {caption}
      </HeaderThreeText>
      <TopContainer>
        {topArticles.map((article: TArticle, index) => {
          const {
            author: {
              username,
              nickname,
            },
            title,
            createdAt,
            favorited,
            favoritesCount,
            slug,
          } = article;
          const nope = (): void => {
          };
          return (
            <>
              {index && <Divider distance={24} />}
              <BriefPostAnnounceWidget
                key={slug}
                name={nickname ?? username}
                title={title}
                date={new Date(createdAt)}
                isLiked={favorited}
                likesCount={favoritesCount}
                onLikeClick={nope} />
            </>
          );
        })}
      </TopContainer>
    </TopAnnounce>
  );
};

export default TopAnnounceWidget;
