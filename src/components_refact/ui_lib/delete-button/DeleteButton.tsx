import React, { FC } from 'react';
import { useDispatch } from '../../../services/hooks';
import { DELETE_COMMENT } from '../../../constants';
import { deleteComment } from '../../../services/api';
import { deleteCommentThunk } from '../../../thunks';

export const DeleteButton: FC<{ slug: string, commentId: string, show: boolean }> = ({ slug, commentId, show }) => {
  const dispatch = useDispatch();

  const del = () => { 
    dispatch(deleteCommentThunk(slug, commentId));
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
