import React, { FC } from "react";
import { AvatarIcon } from "../ui-lib";
import styled from "styled-components";
import { FollowButton, UnfollowButton } from "../ui-lib";
import { TAvatarSizes } from '../types/styles.types';

type TProfileWidget = {
    userName: string,
    isFollow: boolean,
    userImage: string,
    onClick: () => void,
    isUser: boolean,
    size: TAvatarSizes,
    distance: number,
    color: string,
}

const ProfileConteiner = styled.div`
    width: 304px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:24px;

    @media screen and (max-width:768px) {
        width:271px;
    }

     @media screen and (max-width: 320px) {
         width:280px;
     }

`;

const UserName = styled.h2`
  font-family: ${({ theme: { secondLevelHeading: { family } } }) => family};
  font-size: ${({ theme: { secondLevelHeading: { size } } }) => size}px;
  font-weight: ${({ theme: { secondLevelHeading: { weight } } }) => weight};
  line-height: ${({ theme: { secondLevelHeading: { height } } }) => height}px;
    
  @media screen and (max-width: 768px) {
  font-family: ${({ theme: { secondLevelHeadingMobile: { family } } }) => family};
  font-size: ${({ theme: { secondLevelHeadingMobile: { size } } }) => size}px;
  font-weight: ${({ theme: { secondLevelHeadingMobile: { weight } } }) => weight};
  line-height: ${({ theme: { secondLevelHeadingMobile: { height } } }) => height}px;
     }
`;

const ProfileWidgetButton: FC<{ isUser: boolean, isFollow: boolean, onClick:()=>void}> = ({ isUser, isFollow, onClick}) => {
    if (isUser) {
        return null
    }

    return (
        isFollow ? <UnfollowButton onClick={onClick} /> : <FollowButton onClick={onClick}/> 
    )
}


export const ProfileWidget: FC<TProfileWidget> = ({
    userName,
    isFollow,
    userImage,
    onClick,
    isUser,
    size,
    distance,
    color}) => {
    return (
        <ProfileConteiner>
            <AvatarIcon name={userName} image={userImage} size={size} distance={distance} color={color} />
            <UserName>{userName}</UserName>
            <ProfileWidgetButton isUser={isUser} isFollow={isFollow} onClick={onClick} />
        </ProfileConteiner>

    )
}
