import React, {
  useEffect,
  FC,
} from 'react';
import { batch } from 'react-redux';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { TopAnnounceWidget } from '../widgets/top-announce-widget';
import PopularTags from '../widgets/PopularTags';
import { useSelector, useDispatch } from '../services/hooks';
import {
  setTopLikedThunk, setNewPostsThunk, getPublicFeedThunk,
} from '../thunks';
import { FeedRibbon, Slider } from '../widgets';
import { desktopBreakpoint, mobileViewThreshold, tabletBreakpoint } from '../constants';

const desktopToTabletGapStep = (80 - 40) / (desktopBreakpoint - tabletBreakpoint);
const tabletToMobileGapStep = (40 - 20) / (tabletBreakpoint - mobileViewThreshold);

const desktopToTabletMainWidthStep = (1140 - 720) / (desktopBreakpoint - tabletBreakpoint);
const tabletToMobileMainWidthStop = (720 - 595) / (tabletBreakpoint - mobileViewThreshold);

const desktopToTabletAsideWidthStep = (359 - 227) / (desktopBreakpoint - tabletBreakpoint);

const MainSection = styled.main`
    display: flex;
    margin: 56px 0 0 0;
    gap: 0 calc(80px - ${desktopToTabletGapStep} * (${desktopBreakpoint}px - 100vw));
    justify-content: center;
    align-items: center;
    width: calc(1140px - ${desktopToTabletMainWidthStep} * (${desktopBreakpoint}px - 100vw));
    padding: 0 calc((100vw - (1140px - ${desktopToTabletMainWidthStep} * (${desktopBreakpoint}px - 100vw))) / 2);  
  
    @media screen and (max-width:768px) {
      gap: 0 calc(40px - ${tabletToMobileGapStep} * (${tabletBreakpoint}px - 100vw)) ;
      width: calc(720px - ${tabletToMobileMainWidthStop} * (${tabletBreakpoint}px - 100vw));
  }

  @media screen and (max-width: ${mobileViewThreshold}px) {
    flex-direction: column-reverse;
    gap: 0;
    width: 280px;
    }
`;

const RightColumn = styled.aside`
    display: flex;
    align-self: flex-start;
    overflow: hidden;
    flex-direction: column;
    width: calc(359px - ${desktopToTabletAsideWidthStep} * (${desktopBreakpoint}px - 100vw));
  @media screen and (max-width:768px) {
    width: 227px;
    @media screen and (max-width: ${mobileViewThreshold}px) {
      width: 100%;
    }
`;
const Main : FC = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const { articles } = useSelector((state) => state.all);
  useEffect(() => {
    batch(() => {
      dispatch(getPublicFeedThunk());
      dispatch(setNewPostsThunk());
    });
  }, [dispatch]);

  useEffect(() => {
    if (articles && articles.length > 0) {
      dispatch(setTopLikedThunk());
    }
  }, [dispatch, articles]);
  return (
    <MainSection>
      <FeedRibbon />
      <RightColumn>
        <PopularTags />
        <Slider />
        <TopAnnounceWidget caption={intl.messages.popularContent as string} />
      </RightColumn>
    </MainSection>
  );
};
export default Main;
