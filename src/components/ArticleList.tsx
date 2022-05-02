import React, { FC } from 'react';
import { TArticle } from '../types/types';
import { ArticlePreview } from './Articlepreview'
import { ListPagination } from './ListPagination';

export const ArticleList: FC = () => {
  



  if (!articles) {
    return (
      <div className='article-preview'>Loading...</div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className='article-preview'>
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        articles.map((article) => (
          <ArticlePreview article={article} key={article.slug} />
        ))
      }

      <ListPagination/>
      
    </div>
  );
};
