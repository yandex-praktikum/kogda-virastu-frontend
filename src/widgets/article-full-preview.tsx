import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import AuthorHeadingWidget from './author-heading-widget';
import { TArticle, TProfile } from '../types/types';
import BarTags from './BarTags';
import { Divider } from '../ui-lib';
import { useDispatch, useSelector } from '../services/hooks';
import { addLikeThunk, deleteLikeThunk, deleteArticleThunk } from '../thunks';

const ArticleCardConteiner = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 768px) {
        width: 453px;
    }

    @media screen and (max-width:320px) {
        width:280px;
    }
`;

const ArticleName = styled.h2`
    max-width: 700px;
    min-width: 275px;
    grid-column: 1/3;
    font-size: ${({ theme: { secondLevelHeading: { size } } }) => `${size}px`} ;
    font-family: ${({ theme: { secondLevelHeading: { family } } }) => family};
    line-height: ${({ theme: { secondLevelHeading: { height } } }) => `${height}px`} ;
    font-weight: ${({ theme: { secondLevelHeading: { weight } } }) => weight};
    color: ${({ theme: { primaryText } }) => primaryText};
 @media screen and (max-width: 768px) {
        font-size: ${({ theme: { secondLevelHeadingMobile: { size } } }) => `${size}px`} ;
        font-family: ${({ theme: { secondLevelHeadingMobile: { family } } }) => family};
        line-height: ${({ theme: { secondLevelHeadingMobile: { height } } }) => `${height}px`} ;
        font-weight: ${({ theme: { secondLevelHeadingMobile: { weight } } }) => weight};
 }
 @media screen and (max-width: 320px) {
    grid-column: 1/1;
}

`;

type TElementWithImage = {
  image?: string,
};

const ContentConteiner = styled.div<TElementWithImage>`
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-gap: 16px;  
    .link {
        font-size: ${({ theme: { text18Sans: { size } } }) => `${size}px`} ;
        font-family: ${({ theme: { text18Sans: { family } } }) => family};
        line-height: ${({ theme: { text18Sans: { height } } }) => `${height}px`} ;
        font-weight: ${({ theme: { text18Sans: { weight } } }) => weight};
        color: ${(props) => props.theme.button.red.default};
        width: 106px; 
        &:hover {
            color: ${(props) => props.theme.button.red.hover};
        } 
        &:active {
            color: ${(props) => props.theme.button.red.active};
        }
        @media screen and (max-width: 320px) {
        
        ${(props) => (props.image ? 'grid-row: 5/6 ' : 'grid-row: 4/5')};
        margin-top: -8px;
    }
    }
    @media screen and (max-width: 320px) {
        grid-template-columns: 280px;
  
    }
`;

const ArticleImage = styled.img`
width: 159px;
height: 85px;
@media screen and (max-width: 320px) {
    width: 280px;
    height: 150px;
}
`;

const Article = styled.article<TElementWithImage>`
font-size: ${({ theme: { text18Sans: { size } } }) => `${size}px`};
font-family: ${({ theme: { text18Sans: { family } } }) => family};
line-height: ${({ theme: { text18Sans: { height } } }) => `${height}px`};
font-weight: ${({ theme: { text18Sans: { weight } } }) => weight};
color: ${({ theme: { primaryText } }) => primaryText};
 ${((props) => !props.image && 'grid-column: 1/3')};
@media screen and (max-width: 768px) {
    font-size: ${({ theme: { text16Sans: { size } } }) => `${size}px`};
    font-family: ${({ theme: { text16Sans: { family } } }) => family};
    line-height: ${({ theme: { text16Sans: { height } } }) => `${height}px`};
    font-weight: ${({ theme: { text16Sans: { weight } } }) => weight};
}
@media screen and (max-width: 320px) {
    grid-column: 1/1;
}
`;

type TArticleFullPreview = {
  article: TArticle,
  onLikeClick: () => void,
  onDeleteClick:()=> void,
  isAuthor: boolean,
};

const ArticleFullPreview: FC<TArticleFullPreview> = ({
  article, onLikeClick, onDeleteClick, isAuthor }) => (
  
  <ArticleCardConteiner>
    <AuthorHeadingWidget
      name={article.author?.username}
      image={article.author.image}
      date={article.createdAt}
      isLiked={article.favorited}
      likesCount={article.favoritesCount}
      isAuthor={isAuthor}
      onDeleteClick={onDeleteClick}
      onLikeClick={onLikeClick} />
    <ContentConteiner image={article.link}>
      <ArticleName>{article.title}</ArticleName>
      {article.link && <ArticleImage src={article.link} />}
      <Article image={article.link}>{article.body}</Article>
      <Link className='link' to={`/article/${article.slug}`}>
        <FormattedMessage id='articleEnter' />
      </Link>
      <BarTags image={article.link} tagList={/* test */['jjjj', 'ghgh', 'jjjjbnvnbvn', 'ghghvbvbvb', 'jjjj', 'ghgbvbvbh', 'jjjjbvbvb', 'ghgbvbvbh']} />
    </ContentConteiner>
    <Divider distance={0} />
  </ArticleCardConteiner>
  );

export default ArticleFullPreview;
