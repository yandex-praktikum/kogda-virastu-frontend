import styled from 'styled-components';
import React, { FC } from 'react';
import { ReactComponent as EditPic } from '../assets/images/icons/edit-icon.svg';
import { ReactComponent as BasketPic } from '../assets/images/icons/trash-icon.svg';
import { ReactComponent as defaultAvatar } from '../assets/images/icons/avatar-icon.svg';
import { TAvatarSizes, TAvatarIconProps } from '../types/styles.types';

import { getAvatarBorderProp } from '../services/helpers';
import { blue } from '../constants/colors';

type TIconProps = {
  color: string;
  distance?: number;
};

type TAvatarSize = {
  [size in TAvatarSizes]: {
    width: number;
    height: number;
  }
};

const avatarSize : TAvatarSize = {
  large: {
    width: 320,
    height: 320,
  },
  small: {
    width: 24,
    height: 24,
  },
};

type TBorderProps = {
  width: number;
  color: string;
};

interface IBasicAvatar {
  bordered: boolean,
  borderProps: TBorderProps,
  distance?: number,
  color?: string,
}

export const EditIcon = styled(EditPic)<TIconProps>`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: ${({ distance }) => distance ?? 0}px;
  & > path {
    stroke: ${({ color }) => color};
    }
`;
export const DeleteIcon = styled(BasketPic)<TIconProps>`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: ${({ distance }) => distance ?? 0}px;
  & > path {
    stroke: ${({ color }) => color};
    }
`;
const DefaultAvatar = styled(defaultAvatar)<TIconProps>`
  display: block;
  margin-right: ${({ distance }) => distance ?? 0}px;
  & > path {
    stroke: ${({ color }) => color};
    }
`;

const BasicAvatar = styled.img<IBasicAvatar>`
  box-sizing: border-box;
  border-radius: 50%;
  margin-right: ${({ distance }) => distance ?? 0}px;
  border-width: ${({ bordered, borderProps: { width } }) => getAvatarBorderProp(bordered, width)}px;
  border-color: ${({ bordered, borderProps: { color } }) => getAvatarBorderProp(bordered, color)};
`;

export const AvatarIcon : FC<TAvatarIconProps> = ({
  size,
  name,
  image,
  distance,
  color,
}) => {
  const borderProps : TBorderProps = {
    width: 2,
    color: blue,
  };

  if (!image) {
    return (
      <DefaultAvatar
        width={`${avatarSize[size].width}px`}
        height={`${avatarSize[size].height}px`}
        distance={distance}
        color={color} />
    );
  }
  return (
    <BasicAvatar
      borderProps={borderProps}
      bordered={!!image && size === 'small'}
      alt={name}
      src={image}
      width={`${avatarSize[size].width}px`}
      height={`${avatarSize[size].height}px`}
      distance={distance} />
  );
};
