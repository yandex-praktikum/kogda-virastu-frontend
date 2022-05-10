import React, { FC, ReactComponentElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TLinkElement = {
  contentPosition: string,
  width: number,
  isBgColorChange?: boolean,
  isActive?: boolean,
  leftPadding?: number,
};

const LinkElement = styled.li<TLinkElement>`
    display: flex;
    flex-direction: row;
    width: ${(props) => `${props.width}px`};
    height: 40px;
    ${({ isBgColorChange }) => (isBgColorChange ? `:hover {background-color: #E0F1FF; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;}` : ':hover {opacity:0.5}')};
    ${({ isActive }) => (isActive ? ':active {background-color: #D6ECFF; }' : '')};
    padding-left: ${(props) => `${props.leftPadding}px`};
    & .link  {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: ${(props) => props.contentPosition};
   
    list-style: none;
    padding: 0;
    text-decoration: none;
    align-items: center;
    }
    & > img {
        vertical-align: baseline;
    }

`;

const LinkText = styled.p`
    font-size: ${({ theme: { buttonText: { size } } }) => size + `px`} ;
    font-family: ${({ theme: { buttonText: { family } } }) => family};
    line-height: ${({ theme: { buttonText: { height } } }) => height + `px`} ;
    font-weight: ${({ theme: { buttonText: { weight } } }) => weight};
    color: ${({ theme: { markedText } }) => markedText};
    margin: 0;
    margin-left: 8px;
    
`;

type TLinkConteiner = {
  path: string,
  text: string,
  children: ReactNode,
  contentPosition: string,
  width: number,
  isBgColorChange?: boolean,
  isActive?: boolean,
  leftPadding?: number,
};

const LinkConteiner: FC<TLinkConteiner> = ({
  path, text, children, width, contentPosition, isBgColorChange, isActive, leftPadding,
}) => (

  <LinkElement
    width={width}
    contentPosition={contentPosition}
    isActive={isActive}
    isBgColorChange={isBgColorChange}
    leftPadding={leftPadding}>
    <Link to={path} className='link'>
      {children}
      <LinkText>{text}</LinkText>
    </Link>
  </LinkElement>

);

export default LinkConteiner;
