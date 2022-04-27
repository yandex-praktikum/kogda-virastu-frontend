import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { ADD_COMMENT } from '../../constants/actionTypes';
import { TAuthor } from '../../services/types';

// todo: переделать на useDispatch
const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (payload: any) => dispatch({ type: ADD_COMMENT, payload }),
});

const CommentInput: FC<{
  currentUser: TAuthor;
  slug: string;
  onSubmit: (payload: any) => any;
}> = (props) => {
  const [state, setState] = useState({
    body: '',
  });

  const setBody = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ body: ev.target.value });
  };

  const createComment = (ev: React.FormEvent) => {
    ev.preventDefault();
    const payload = agent.Comments.create(props.slug, {
      body: state.body,
    });
    setState({ body: '' });
    props.onSubmit(payload);
  };

  return (
    <form className='card comment-form' onSubmit={createComment}>
      <div className='card-block'>
        <textarea
          className='form-control'
          placeholder='Write a comment...'
          value={state.body}
          onChange={setBody}
          rows={3} />
      </div>
      <div className='card-footer'>
        <img
          src={props.currentUser?.image}
          className='comment-author-img'
          alt={props.currentUser.username} />
        <button className='btn btn-sm btn-primary' type='submit'>
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
