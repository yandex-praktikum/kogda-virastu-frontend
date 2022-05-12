import React, { FC, MouseEventHandler, MouseEvent } from 'react';
import styled, { useTheme } from 'styled-components';
import { CrossIcon } from '../ui-lib';

interface ITagProps {
  tag: string,
  handleClick?(e: React.MouseEvent<HTMLButtonElement>, tag: string): void,
  isActive: boolean,
  inactiveTag?: MouseEventHandler<SVGSVGElement>,
}

const Tag: FC<ITagProps> = ({
  tag, handleClick, isActive, inactiveTag,
}) => {
  const theme = useTheme();
  const Button = styled.button`
    padding: 0;
    border: none;
    font-family: ${theme.text18Sans.family};
    font-weight: ${theme.text18Sans.weight};
    font-size: ${theme.text18Sans.size}px;
    line-height: ${theme.text18Sans.height}px;
    display: flex;
    align-items: center;
    color: ${isActive ? theme.button.blue.default : theme.secondaryText};
    background-color: transparent;

    :active {
      outline: none;
    }
  `;

  return (
    <Button
      type='button'
      key={tag}
      onClick={handleClick && ((e) => handleClick(e, tag))}>
      #
      {tag}
      {' '}
      {isActive && <CrossIcon color='blue' onClick={inactiveTag} />}
    </Button>
  );
};

export default Tag;
