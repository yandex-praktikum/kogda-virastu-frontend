import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import getComments from '../../thunks/get-comments-thunk';
import Comment from '../../components_refact/comment';

const CommentList: FC = () => {
  const { id: slug } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.view.commentsFeed);
  useEffect(() => {
    dispatch(getComments(slug));
  }, [dispatch, comments.length, slug]);

  if (Array.isArray(comments) && !comments.length) {
    return null;
  }
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          // currentUser={props.currentUser}
          slug={slug}
          key={comment.id} />
      ))}
    </div>
  );
};

export default CommentList;
