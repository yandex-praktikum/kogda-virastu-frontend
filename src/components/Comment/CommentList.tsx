import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import getComments from '../../thunks/get-comments-thunk';
import Comment from './Comment';

const CommentList: FC = () => {
  const { id: slug } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.view.commentsFeed)
  useEffect(() => {
    dispatch(getComments(slug))
  }, [dispatch, comments?.length])

  if (!comments) {
    return <p>Пусто</p>
  } else {
    return (
      <div>
        {comments.map((comment) => (
          <Comment
            comment={comment}
            // currentUser={props.currentUser}
            slug={slug}
            key={comment.id}
          />
        ))}
      </div>
    );
  }

};

export default CommentList;
