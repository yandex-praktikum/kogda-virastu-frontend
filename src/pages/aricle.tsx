import React, { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../services/hooks';
import { createCommentThunk, deleteArticleThunk, deleteCommentThunk, getArticleThunk, getCommentsThunk } from '../thunks';
import { resetArticle, setComment } from '../store';
import { Article, CommentInput, CommentList } from '../widgets';
import getComments from '../thunks/get-comments-thunk';

const Page = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArticlePageWrapper = styled.section`
  max-width: 700px;
`;

const ArticlePage = () => {
  const dispatch = useDispatch();
  const { id: slug } = useParams();
  const navigate = useNavigate();
  const comments = useSelector((store) => store.view.commentsFeed);
  const { article } = useSelector((state) => state.view);
  const currentUser = useSelector((state) => state.profile);
  const { isLoggedIn } = useSelector((state) => state.system);

  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setComment(e.target.value));
  };

  const handlerFormComment = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createCommentThunk(slug));
  };

  useEffect(() => {
    dispatch(getArticleThunk(slug));
    dispatch(getCommentsThunk(slug));
    dispatch(getComments(slug));
    return () => {
      dispatch(resetArticle());
    };
  }, [dispatch, slug]);

  const onClickDeleteComment = (commentId: string) => {
    dispatch(deleteCommentThunk(slug, commentId));
  };

  const onClickDeleteArticle = () => {
    if (article) {
      dispatch(deleteArticleThunk(article.slug));
    }
  };

  const onClickEditArticle = () => {
    if (article && slug) {
      navigate(`/editor/${slug}`);
    }
  };

  if (!article) {
    return (
      <p>Подождите...</p>
    );
  }
  return (
    <Page>
      <ArticlePageWrapper>
        <Article
          article={article}
          isAuthor={currentUser.username === article.author.username}
          onClickDelete={onClickDeleteArticle}
          onClickEdit={onClickEditArticle} />
        {isLoggedIn && (
          <CommentInput
            userName={currentUser.username ?? ''}
            imageSrc={currentUser.image ?? ''}
            createAt={new Date()}
            onChangeArea={onChangeComment}
            onButtonClick={handlerFormComment} />
        )}
        <CommentList
          comments={comments}
          currentUserName={currentUser.username ?? ''}
          onDeleteClick={onClickDeleteComment} />
      </ArticlePageWrapper>
    </Page>
  )
};

export default ArticlePage;
