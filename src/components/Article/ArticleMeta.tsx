import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import { ArticleActions } from '../ArticleActions';

type IArticleMetaProps = {
  article: any,
  canModify: any
};

const ArticleMeta: FC<IArticleMetaProps> = (props) => {
  const { article, canModify } = props;
  return (
    <div className='article-meta'>
      <Link to={`/${article.author.username}`}>
        <img src={article.author.image} alt={article.author.username} />
      </Link>

      <div className='info'>
        <Link to={`/${article.author.username}`} className='author'>
          {article.author.username}
        </Link>
        <span className='date'>
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>

      <ArticleActions canModify={canModify} article={article} />
    </div>
  );
};

export default ArticleMeta;
