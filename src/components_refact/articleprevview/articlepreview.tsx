import React, { FC } from "react";
import { TArticle } from "../../types/types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../../constants/actionTypes';
import { postLikeArticle, deleteLikeArticle } from "../../services/api";




export const ArticlePreview: FC<{ article: TArticle }> = ({ article }) => {
    const dispatch = useDispatch();

    const FAVORITED_CLASS = 'btn btn-sm btn-primary';
    const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

    const favoriteButtonClass = article.favorited ?
        FAVORITED_CLASS :
        NOT_FAVORITED_CLASS;

    const handleClick = (ev: React.MouseEvent) => {
        ev.preventDefault();
        if (article.favorited) {
            dispatch({ type: ARTICLE_UNFAVORITED, payload: deleteLikeArticle(article.slug) })
        } else {
            dispatch({ type: ARTICLE_FAVORITED, payload: postLikeArticle(article.slug) })
        }
    };

    return (
        <div className="article-preview">
            <div className="article-meta">
                <Link to={`/@${article.author.username}`}>
                    <img src={article.author.image} alt={article.author.username} />
                </Link>

                <div className="info">
                    <Link className="author" to={`/@${article.author.username}`}>
                        {article.author.username}
                    </Link>
                    <span className="date">
                        {new Date(article.createdAt).toDateString()}
                    </span>
                </div>

                <div className="pull-xs-right">
                    <button className={favoriteButtonClass} onClick={handleClick}>
                        <i className="ion-heart"></i> {article.favoritesCount}
                    </button>
                </div>
            </div>

            <Link to={`/article/${article.slug}`} className="preview-link">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                    {
                        article.tagList.map((tag: any) => {
                            return (
                                <li className="tag-default tag-pill tag-outline" key={tag}>
                                    {tag}
                                </li>
                            )
                        })
                    }
                </ul>
            </Link>
        </div>
    );


}