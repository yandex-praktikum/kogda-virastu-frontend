import React, { FC, MouseEventHandler } from 'react';
import { FormattedDate } from 'react-intl';
import styled from 'styled-components';
import { TArticle } from '../types/types';
import { DeletePostButton, EditPostButton } from '../ui-lib';
import BarTags from './BarTags';
import Likes from './likes';

type TArticleProps = {
  isAuthor: boolean;
  article: TArticle;
  onClickEdit: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: MouseEventHandler<HTMLButtonElement>;
  onClickLike: MouseEventHandler<SVGSVGElement>;
};

type TArticleActionsProps = {
  onClickEdit: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: MouseEventHandler<HTMLButtonElement>;
};

const ArticleContainer = styled.div`
  display: flex;
  flex-flow: column  nowrap;
  gap: 24px 0;
  @media screen and (max-width:768px) {
    gap: 16px 0;
 }
`;

const ArticleTitle = styled.h1`
    margin: 0;
    font-size: ${({ theme: { firstLevelHeading: { size } } }) => `${size}px`} ;
    font-family: ${({ theme: { firstLevelHeading: { family } } }) => family};
    line-height: ${({ theme: { firstLevelHeading: { height } } }) => `${height}px`} ;
    font-weight: ${({ theme: { firstLevelHeading: { weight } } }) => weight};
    color: ${({ theme: { primaryText } }) => primaryText};
`;

const ArticleActionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const ArticleAuthor = styled.p`
  font-size: ${({ theme: { text16: { size } } }) => size}px ;
  font-family: ${({ theme: { text16: { family } } }) => family};
  line-height: ${({ theme: { text16: { height } } }) => height}px;
  font-weight: ${({ theme: { text16: { weight } } }) => weight};
  margin: 0px;
  grid-row: 1;
`;

const ArticleCreateDate = styled.p`
  font-size: ${({ theme: { text16: { size } } }) => size}px ;
  font-family: ${({ theme: { text16: { family } } }) => family};
  line-height: ${({ theme: { text16: { height } } }) => height}px;
  font-weight: ${({ theme: { text16: { weight } } }) => weight};
  margin: 0px;
  grid-row: 1; 
`;

const ArticleLikeWrapper = styled.p`
  grid-row: 1;
  justify-self: end;
`;

const ArticleAuthorContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: 0 24px;
`;

const ArticleImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const ArticleBody = styled.p`
  font-family: ${({ theme: { text18: { family } } }) => family};
  font-size: ${({ theme: { text18: { size } } }) => size}px ;
  line-height: ${({ theme: { text18: { height } } }) => height}px;
  font-weight: ${({ theme: { text18: { weight } } }) => weight};
  margin: 0px;
  @media screen and (max-width:768px) {
    font-family: ${({ theme: { text16: { family } } }) => family};
    font-size: ${({ theme: { text16: { size } } }) => size}px ;
    line-height: ${({ theme: { text16: { height } } }) => height}px;
    font-weight: ${({ theme: { text16: { weight } } }) => weight};
 }
`;

const ArticleActions: FC<TArticleActionsProps> = ({ onClickEdit, onClickDelete }) => (
  <ArticleActionsContainer>
    <EditPostButton onClick={onClickEdit} />
    <DeletePostButton onClick={onClickDelete} />
  </ArticleActionsContainer>
);

const Article: FC<TArticleProps> = ({
  article, isAuthor, onClickEdit, onClickDelete, onClickLike,
}) => (
  <ArticleContainer>
    {isAuthor && (
      <ArticleActions onClickDelete={onClickDelete} onClickEdit={onClickEdit} />
    )}

    <ArticleTitle>{article.title}</ArticleTitle>
    <ArticleAuthorContainer>
      <ArticleAuthor>{article.author.username}</ArticleAuthor>
      <ArticleCreateDate>
        <FormattedDate
          value={article.createdAt}
          year='numeric'
          month='long'
          day='2-digit'
          weekday='short' />
      </ArticleCreateDate>
      <ArticleLikeWrapper>
        <Likes
          likesCounterValue={article.favoritesCount}
          handleClick={onClickLike}
          favorite={article.favorited} />
      </ArticleLikeWrapper>
    </ArticleAuthorContainer>
    {article.link && (
      <ArticleImage src={article.link} />
    )}
    <ArticleBody>{article.body}</ArticleBody>
    <BarTags tagList={article.tagList} />
  </ArticleContainer>
);

export default Article;
