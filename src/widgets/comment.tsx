import styled from 'styled-components';
import React, { FC } from 'react';

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  background:${({ theme: { bgPrimary } }) => bgPrimary};
  border-radius: 4px 4px 0px 0px;
  padding: 24px 24px 16px;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 24px 0;
`;

const Comment: FC = ({ }) => (
  <CommentContainer>
  </CommentContainer>
)