import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { batch } from 'react-redux';
import { useDispatch, useSelector } from '../services/hooks';
import {
  Article,
  CommentInput,
  CommentList,
  TopAnnounceWidget,
} from '../widgets';
import { getArticleThunk, getCommentsThunk } from '../thunks';
import { resetArticle } from '../store';
import Slider from '../widgets/slider';
import { desktopBreakpoint, mobileViewThreshold, tabletBreakpoint } from '../constants';

const desktopToTabletGapStep = (80 - 40) / (desktopBreakpoint - tabletBreakpoint);
const tabletToMobileGapStep = (40 - 20) / (tabletBreakpoint - mobileViewThreshold);

const desktopToTabletMainWidthStep = (1140 - 720) / (desktopBreakpoint - tabletBreakpoint);
const tabletToMobileMainWidthStop = (720 - 595) / (tabletBreakpoint - mobileViewThreshold);

const desktopToTabletAsideWidthStep = (359 - 227) / (desktopBreakpoint - tabletBreakpoint);

const ArticlePageWrapper = styled.div`
  max-width: 700px;
  width: 100%;
`;

const CommentInputWrapper = styled.div`
  margin-bottom: 24px;
`;

const CommentTitle = styled.p`
  font-family: ${({ theme: { fourthLevelHeading: { family } } }) => family};
  font-size: ${({ theme: { fourthLevelHeading: { size } } }) => size}px;
  font-weight: ${({ theme: { fourthLevelHeading: { weight } } }) => weight};
  line-height: ${({ theme: { fourthLevelHeading: { height } } }) => height}px;
  margin: 48px 0 24px;
`;

const ArticleSection = styled.section`
    display: flex;
    margin: 56px auto;
    position: relative;
    z-index: 10;
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
  }
    @media screen and (max-width: ${mobileViewThreshold}px) {
      width: 100%;
    }
`;

const ArticlePage: FC = () => {
  const dispatch = useDispatch();
 
  const { commentsFeed: comments } = useSelector((store) => store.view);
  const { isLoggedIn } = useSelector((state) => state.system);
  const intl = useIntl();
  const { slug } = useParams();
  useEffect(() => {
    batch(() => {
      dispatch(resetArticle());
      dispatch(getCommentsThunk(slug));
      dispatch(getArticleThunk(slug));
    });
  }, [dispatch, slug]);

  return (
    <ArticleSection>
      <ArticlePageWrapper>
        <Article slug={slug} />
        {(isLoggedIn || !!comments?.length) ? (
          <CommentTitle>
            <FormattedMessage id='comments' />
          </CommentTitle>
        ) : null}
        <CommentInputWrapper>
          <CommentInput slug={slug} />
        </CommentInputWrapper>
        <CommentList slug={slug} />
      </ArticlePageWrapper>
      <RightColumn>

        <Slider />
        <TopAnnounceWidget caption={intl.messages.popularContent as string} />
      </RightColumn>
    </ArticleSection>
  );
};
export default ArticlePage;
