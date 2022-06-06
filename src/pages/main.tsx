import React, { useEffect, FC } from 'react';
import { batch } from 'react-redux';
import styled from 'styled-components';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useIntl } from 'react-intl';
import TopAnnounceWidget from '../widgets/top-announce-widget';
import FeedRibbonSubscribe, {
  activeStyle,
  LeftColumn,
  Links,
  MainContainer,
  MainSection,
  notActiveStyle,
  RightColumn,
} from '../widgets/feed-ribbon-subscribe';
import PopularTags from '../widgets/popular-tags';
import { useSelector, useDispatch } from '../services/hooks';
import {
  setTopLikedThunk,
  setNewPostsThunk,
  getPublicFeedThunk,
} from '../thunks';
import { FeedRibbon, Slider } from '../widgets';

const Main: FC = () => {
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
          <Routes>
            <Route path='/' element={<FeedRibbon />} />
            <Route path='/article' element={<FeedRibbonSubscribe />} />
          </Routes>
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
export default Main;
