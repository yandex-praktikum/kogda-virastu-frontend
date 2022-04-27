import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_COMMENT } from '../../../constants';
import { deleteComment } from '../../../services/api';

export const DeleteButton: FC<{ slug: string, commentId: string, show: boolean }> = ({ slug, commentId, show }) => {
  const dispatch = useDispatch();

  const del = () => {
    const payload = deleteComment(slug, commentId);
    dispatch({ type: DELETE_COMMENT, payload, commentId });
  };

  if (show) {
    return (
      <span className='mod-options'>
        <i className='ion-trash-a' onClick={del} />
      </span>
    );
  }
  return null;
};
