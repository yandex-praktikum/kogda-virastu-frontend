import React, { useEffect } from 'react';
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

const Page = styled.section`
  width: 100%;
  margin-left: 24px;
  margin-top: 56px;
  margin-bottom: 166px;

  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 0 81px ;
  @media screen and (max-width:768px) {
    gap: 0 40px ;
    margin-top: 48px;
    margin-bottom: 100px;
  }

  @media screen and (max-width:320px) {
    gap: 0 ;
    margin-top: 46px;
    margin-bottom: 100px;
  } 
`;

const ArticlePageWrapper = styled.section`
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

const ArticlePage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { commentsFeed: comments } = useSelector((store) => store.view);
  const { isLoggedIn } = useSelector((state) => state.system);
  const intl = useIntl();
  useEffect(() => {
    batch(() => {
      dispatch(resetArticle());
      dispatch(getCommentsThunk(slug));
      dispatch(getArticleThunk(slug));
    });
  }, [dispatch, slug]);
  if (!slug) {
    return null;
  }
  return (
    <Page>
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
      <TopAnnounceWidget caption={intl.messages.popularContent as string} />
      <Slider />
    </Page>
  );
};

export default ArticlePage;
