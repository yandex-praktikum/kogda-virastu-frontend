import React, { FC, MouseEventHandler } from 'react';
import styled, { useTheme } from 'styled-components';
import { LikeIcon } from '../ui-lib';
import { TFontProperties } from '../types/styles.types';

interface ILikesProps {
  likesCounterValue: number,
  handleClick: MouseEventHandler<SVGSVGElement>,
  favorite: boolean
}

type TLikesCounterProps = {
  font: TFontProperties,
  color: string
};

const LikesCounter = styled.p<TLikesCounterProps>`
  margin: 0;
  font-family: ${(props) => props.font.family};
  color: ${(props) => props.color};
`;

const LikesContainer = styled.div`
  width: 40px;
  display: flex;
  justify-content: space-between;
`;

const Likes: FC<ILikesProps> = ({ likesCounterValue, handleClick, favorite }) => {
  const theme = useTheme();

  return (
    <LikesContainer>
      <LikesCounter font={theme.text18Sans} color={theme.secondaryText}>
        {likesCounterValue}
      </LikesCounter>
      <LikeIcon onClick={(e) => handleClick(e)} width='21' height='18' isHover={true} cursor='pointer' color='grey' />
    </LikesContainer>

  );
};

export default Likes;
