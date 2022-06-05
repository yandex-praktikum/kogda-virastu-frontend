import React, { FC, MouseEventHandler } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { RegularText } from '../ui-lib';
import ScrollRibbon from './scroll-ribbon';
import ArticleFullPreview from './article-full-preview';
import { addLikeThunk, deleteLikeThunk } from '../thunks';
import {
  desktopBreakpoint,
  mobileViewThreshold,
  tabletBreakpoint,
} from '../constants';
import PopularTags from './popular-tags';
import Slider from './slider';
import TopAnnounceWidget from './top-announce-widget';

export const desktopToTabletGapStep = (80 - 40) / (desktopBreakpoint - tabletBreakpoint);
export const tabletToMobileGapStep = (40 - 20) / (tabletBreakpoint - mobileViewThreshold);
export const tabletToMobileMainWidthStop = (720 - 595) / (tabletBreakpoint - mobileViewThreshold);
export const desktopToTabletAsideWidthStep = (359 - 227) / (desktopBreakpoint - tabletBreakpoint);

export const RibbonWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  list-style: none outside;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  gap: 32px;
`;

export const ItemWrapper = styled.li`
  list-style: none outside;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
`;
export const MainContainer = styled.div`
  display: flex;
  margin: 56px 0 0 0;
  gap: 0
    calc(80px - ${desktopToTabletGapStep} * (${desktopBreakpoint}px - 100vw));
  justify-content: center;
  align-items: flex-start;
  max-width: 1140px;
  position: relative;
  z-index: 10;

  @media screen and (max-width: ${tabletBreakpoint}px) {
    padding: 0 24px;
    gap: 0
      calc(40px - ${tabletToMobileGapStep} * (${tabletBreakpoint}px - 100vw));
    width: calc(
      720px - ${tabletToMobileMainWidthStop} * (${tabletBreakpoint}px - 100vw)
    );
  }
  @media screen and (max-width: 765px) {
    flex-direction: column-reverse;
    gap: 0;
    max-width: 400px;
  }
  @media screen and (min-width: ${desktopBreakpoint}px) {
    gap: 40px;
  }

  @media screen and (max-width: ${mobileViewThreshold}px) {
    padding: 0 20px;
    width: 280px;
  }
`;
export const LeftColumn = styled.div`
  overflow: hidden;
  min-width: 453px;
`;

export const RightColumn = styled.aside`
  display: flex;
  overflow: hidden;
  align-self: flex-start;
  flex-direction: column;
  max-width: 360px;
  @media screen and (max-width: 1600px) {
    width: calc(
      359px - ${desktopToTabletAsideWidthStep} *
        (${desktopBreakpoint}px - 100vw)
    );
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 765px) {
      width: 100%;
    }
  }
`;

export const Links = styled.div`
  display: flex;
`;
export const activeStyle = {
  fontFamily: 'Alegreya Sans',
  fontSize: '18px',
  lineHeight: '24px',
  textDecoration: 'none',
  padding: '16px 8px',
  marginBottom: '33px',
  color: '#0A0A0B',
  borderBottom: '2px solid #008aff',
};
export const notActiveStyle = {
  fontFamily: 'Alegreya Sans',
  fontSize: '18px',
  lineHeight: '24px',
  padding: '16px 8px',
  textDecoration: 'none',
  color: '#62626A',
};
export const MainSection = styled.main`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const FeedRibbonSubscribe: FC = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const posts = useSelector((state) => state.view.feed);
  const tags = useSelector((state) => state.view.selectedTags) ?? [];
  const { isPublicFeedFetching } = useSelector((state) => state.api);
  if (!posts || isPublicFeedFetching) {
    return (
      <RegularText size='large' weight={500}>
        <FormattedMessage id='loading' />
      </RegularText>
    );
  }

  const activeLink = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return activeStyle;
    }
    return notActiveStyle;
  };

  return (
    <MainSection>
      <MainContainer>
        <LeftColumn>
          <Links>
            <NavLink to='/' style={activeLink}>
              Все посты
            </NavLink>
            <NavLink to='/article' style={activeLink}>
              Мои подписки
            </NavLink>
          </Links>
          <ScrollRibbon>
            <RibbonWrapper>
              {posts
                .filter((post) => post.author.following)
                .map((post) => {
                  const onClick: MouseEventHandler = () => {
                    if (post.favorited) {
                      dispatch(deleteLikeThunk(post.slug));
                    } else {
                      dispatch(addLikeThunk(post.slug));
                    }
                  };
                  return (
                    <ItemWrapper key={post.slug}>
                      <ArticleFullPreview
                        article={post}
                        onLikeClick={onClick} />
                    </ItemWrapper>
                  );
                })}
            </RibbonWrapper>
          </ScrollRibbon>
        </LeftColumn>
        <RightColumn>
          <PopularTags />
          <TopAnnounceWidget caption={intl.messages.popularContent as string} />
          <Slider />
        </RightColumn>
      </MainContainer>
    </MainSection>
  );
};

export default FeedRibbonSubscribe;
