import styled from 'styled-components';
import React, { FC } from 'react';
import CommentAuthorHeading from './comment-author-heading';

const CommentContainer = styled.div`

  display: flex;
  background: ${({ theme: { bgPrimary } }) => bgPrimary};
  border-radius: 4px;
  border: 1px solid ${({ theme: { dividerColor } }) => dividerColor};
  padding: 24px 24px 16px;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 24px 0;
`;

type TCommentProps = {
  // eslint-disable-next-line react/require-default-props
  image?: string;
  createAt: Date;
  name: string;
  // eslint-disable-next-line react/require-default-props
  onDeleteClick?: (commentId: string) => void;
  isAuthor: boolean,
  body: string,
  commentId: string,
};

const CommentBody = styled.p`
  color: ${({ theme }) => theme.primaryText};
  font-size: ${({ theme }) => theme.text16.size}px;
  font-family: ${({ theme }) => theme.text16.family};
  font-weight: ${({ theme }) => theme.text16.weight};
  line-height: ${({ theme }) => theme.text16.height}px;
  margin: 0;
`;

const Comment: FC<TCommentProps> = ({
  image,
  createAt,
  name,
  isAuthor,
  onDeleteClick,
  commentId,
  body,
}) => (
  <CommentContainer>
    <CommentAuthorHeading
      image={image}
      date={createAt}
      name={name}
      onDeleteClick={() => {
        if (typeof onDeleteClick === 'function') {
          onDeleteClick(commentId);
        }
      }}
      isAuthor={isAuthor} />
    <CommentBody>{body}</CommentBody>
  </CommentContainer>
);

export default Comment;
