import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import agent from '../../agent';

import { ADD_COMMENT } from '../../constants/actionTypes';

export const CommentInput = (props: any) => {
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const bodyChange = (e: any) => {
    setBody(e.target.value);
  };
  const createComment = (e: any) => {
    e.preventDefault();
    const payload = agent.Comments.create(
      props.slug,
      body,
    );
    setBody('');
    dispatch({ type: ADD_COMMENT, payload });
  };
  return (
    <form className='card comment-form' onSubmit={createComment}>
      <div className='card-block'>
        <textarea
          className='form-control'
          placeholder='Write a comment...'
          value={body}
          onChange={bodyChange}
          rows={3} />
      </div>
      <div className='card-footer'>
        <img
          src={props.currentUser.image}
          className='comment-author-img'
          alt={props.currentUser.username} />
        <button
          className='btn btn-sm btn-primary'
          type='submit'>
          Post Comment
        </button>
      </div>
    </form>
  );
};
