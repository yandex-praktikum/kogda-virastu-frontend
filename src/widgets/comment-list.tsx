import React, { FC } from 'react';
import styled from 'styled-components';
import { TComments } from '../types/types';
import Comment from './comment';

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
    &:not(:last-child) {
      margin-bottom: 24px;
  }
`;

type CommentListProps = {
  comments: TComments
  // eslint-disable-next-line react/require-default-props
  onDeleteClick?: (commentId: string) => void;
  // eslint-disable-next-line react/require-default-props
  currentUserName?: string,
};

const CommentList: FC<CommentListProps> = ({
  comments,
  onDeleteClick,
  currentUserName = false,
}) => {
  if (Array.isArray(comments) && !comments.length) {
    return null;
  }
  return (
    <List>
      {comments.map((comment) => (
        <Item key={comment.id}>
          <Comment
            createAt={new Date(comment.createdAt)}
            name={comment.author.username}
            body={comment.body}
            isAuthor={comment.author.username === currentUserName}
            onDeleteClick={onDeleteClick}
            commentId={comment.id} />
        </Item>
      ))}
    </List>
  );
};

export default CommentList;
