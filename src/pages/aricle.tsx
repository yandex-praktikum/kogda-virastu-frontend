import React, { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from '../services/hooks';
import {
  deleteCommentThunk,
  getCommentsThunk,
} from '../thunks';
import {
  Article,
  CommentInput,
  CommentList,
  TopAnnounceWidget,
} from '../widgets';

const Page = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0 81px ;
  @media screen and (max-width:768px) {
    gap: 0 40px ;
  }

  @media screen and (max-width:768px) {
    gap: 0 ;
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
  const { id: slug } = useParams();
  const { commentsFeed: comments } = useSelector((store) => store.view);
  const { isLoggedIn } = useSelector((state) => state.system);
  const intl = useIntl();
  return (
    <Page>
      <ArticlePageWrapper>
        <Article slug={slug!} />
        {(isLoggedIn || !!comments?.length) ? (
          <CommentTitle>
            <FormattedMessage id='comments' />
          </CommentTitle>
        ) : null}
        <CommentInputWrapper>
          <CommentInput slug={slug!} />
        </CommentInputWrapper>
        <CommentList slug={slug!} />
      </ArticlePageWrapper>
      <TopAnnounceWidget caption={intl.messages.popularContent as string} />
    </Page>
  );
};

export default ArticlePage;
