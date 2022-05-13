import React, { FC, MouseEventHandler, MouseEvent } from 'react';
import styled, { useTheme } from 'styled-components';
import { CrossIcon } from '../ui-lib';

type TButtonProps = {
  isActive: boolean;
}

const Button = styled.button<TButtonProps>`
    padding: 0;
    border: none;
    font-family: ${({ theme }) => theme.text18Sans.family};
    font-weight: ${({ theme }) => theme.text18Sans.weight};
    font-size: ${({ theme }) => theme.text18Sans.size}px;
    line-height: ${({ theme }) => theme.text18Sans.height}px;
    display: flex;
    align-items: center;
    color: ${({ isActive, theme }) => isActive ? theme.button.blue.default : theme.secondaryText};
    background-color: transparent;

    :active {
      outline: none;
    }
  `;

interface ITagProps {
  tag: string,
  handleClick?(e: React.MouseEvent<HTMLButtonElement>, tag: string): void,
  isActive: boolean,
  deactivationTag?: MouseEventHandler<SVGSVGElement>,
}

const Tag: FC<ITagProps> = ({
  tag, handleClick, isActive, deactivationTag,
}) => {
  const theme = useTheme();

  return (
    <Button
      isActive = {isActive}
      type='button'
      key={tag}
      onClick={handleClick && ((e) => handleClick(e, tag))}>
      #
      {tag}
      {' '}
      {isActive && deactivationTag && <CrossIcon color={theme.markedText} onClick={deactivationTag} />}
    </Button>
  );
};

export default Tag;
