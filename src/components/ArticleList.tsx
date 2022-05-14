import React, { FC } from 'react';
import { TArticle } from '../types/types';
import ArticlePreview from './Articlepreview';
import ListPagination from './ListPagination';
import { useSelector } from '../services/hooks';
import { ArticleFullPreview } from '../widgets/ArticleFullPreview';

const ArticleList:FC = () => {
  const { feed } = useSelector((state) => state.view);
  if (!feed) {
    return (
      <div className='article-preview'>Loading...</div>
    );
  }

  if (feed.length === 0) {
    return (
      <div className='article-preview'>
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        feed.map((article : TArticle) => (
          <ArticleFullPreview onLikeClick={()=> console.log('f')} article={article} isAuthor={true}  />
        ))
      }

      <ListPagination />
    </div>
  );
};

export default ArticleList;
