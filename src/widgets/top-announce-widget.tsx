import React, {FC} from "react";
import styled from "styled-components";
import {desktopBreakpoint, tabletBreakpoint, mobileViewThreshold} from "../constants";

import {useDispatch, useSelector} from "../services/hooks";
import {TArticle} from '../types/types';
import BriefPostAnnounceWidget from "./brief-post-announce-widget";

const desktopToTabletWidthStep = (359 - 227) / (desktopBreakpoint - tabletBreakpoint);
const tabletToMobileWidthStep = (227 - 220) / (tabletBreakpoint - mobileViewThreshold);
const TopContainer = styled.ul`
  min-width: 220px;
  max-width: 359px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: ${desktopBreakpoint}px) {
    width: calc(359px - (${desktopBreakpoint}px - 100vw) * ${desktopToTabletWidthStep});
    }
  @media screen and (max-width: ${tabletBreakpoint}px) {
    width: calc(227px - (${tabletBreakpoint}px - 100vw) * ${tabletToMobileWidthStep});
    }
  @media screen and (max-width: ${mobileViewThreshold}px) {
    display: none;
    }
`;

const TopAnnounceWidget : FC = () => {
  const topArticles = useSelector((state) => state.view.topFeed) ?? [];
  const dispatch = useDispatch();

  return (
    <TopContainer>
    {topArticles.map((article: TArticle) => {
      const {
        username,
        nickname,
        title,
        createdAt,
        favorited,
        favoritesCount } = article;
      <BriefPostAnnounceWidget
        name={nickname && username}
        title={title}
        date={new Date(createdAt)}
        isLiked={}
        likesCount={}
        onLikeClick={() ={}
    })

    }
    </TopContainer>
  )
}
