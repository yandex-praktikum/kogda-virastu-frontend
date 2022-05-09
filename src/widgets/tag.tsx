import { FC } from "react";
import styled, { useTheme } from 'styled-components';
import { CloseIcon } from "../ui-lib/icons/icons";

interface ITagProps {
  tag: string,
  handleClick: Function,
  active: boolean,
  inactiveTag: Function
}

const Tag: FC<ITagProps> = ({ tag, handleClick, active, inactiveTag }) => {

  const theme = useTheme();

  const Button = styled.button`
    padding: 0;
    border: none;
    font-family: ${theme.textSans.family};
    font-weight: ${theme.textSans.weight};
    font-size: ${theme.textSans.size}px;
    line-height: ${theme.textSans.height}px;
    display: flex;
    align-items: center;
    color: ${ active ? theme.button.blue.default : theme.secondaryText};
    background-color: transparent;

    :active {
      outline: none;
    }
  `;

  return (
    <Button
      type='button'
      key={tag}
      onClick={(e) => handleClick(e, tag)}>
      #{tag} { active? <CloseIcon color="blue" onClick={(e) => inactiveTag(e)} /> : null }
    </Button>
  )
}

export default Tag;