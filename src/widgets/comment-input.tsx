import React, { FC } from 'react';
import styled from 'styled-components';
import { TCommentInputProps } from '../types/widgets.types';
import { PublishCommentButton } from '../ui-lib/buttons';
import { FieldTextComment } from '../ui-lib/textFields/textAreaFields';
import Author from './author';

const CommentInputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid${({ theme: { dividerColor } }) => dividerColor};
  border-radius: 4px;
  & > div > label > textarea {
    border-radius: 4px;
  }
`;

const CommentInfoWrapper = styled.div`
  border-top: 1px solid${({ theme: { dividerColor } }) => dividerColor};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 24px;
  @media screen and (max-width:768px) {
    flex-flow: column wrap;
    gap: 10px 0;
  }
`;

const CommentButtonWrapper = styled.div`
  @media screen and (max-width:768px) {
    max-width: 248px;
  }
`;

const CommentInput: FC<TCommentInputProps> = ({
  userName, createAt, imageSrc, onButtonClick, disabledButton, onChangeArea,
}) => (
  <CommentInputContainer>
    <FieldTextComment minHeight={112} isHasBorder={false} onChange={onChangeArea} />
    <CommentInfoWrapper>
      <Author userName={userName} createAt={createAt} imageSrc={imageSrc} />
      <CommentButtonWrapper>
        <PublishCommentButton disabled={disabledButton} onClick={onButtonClick} />
      </CommentButtonWrapper>
    </CommentInfoWrapper>
  </CommentInputContainer>
);

export default CommentInput;
