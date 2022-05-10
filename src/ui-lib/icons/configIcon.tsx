import styled from 'styled-components';

import { FC, useState, useEffect } from 'react';

type TcontainerIconStyle = {
  width?: string;
  height?: string;
  isHover?: boolean;
  cursor?: 'default' | 'pointer' | 'none';
  filter?: string
};

const ContainerIcon = styled.div<TcontainerIconStyle>`
width: ${({ width = '24px' }) => width};
height:${({ height = '24px' }) => height};
cursor: ${({ cursor = 'pointer' }) => cursor};
filter: ${({ filter = 'invert(41%) sepia(92%) saturate(3484%) hue-rotate(339deg) brightness(104%) contrast(100%)' }) => filter};
${({ isHover }) => (isHover ? ':hover {opacity:0.5}' : '')}
`;
type TConstuctorIcon = {
  onClick?(e: React.MouseEvent<HTMLDivElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLDivElement>): void;
  picture: any
  width?: string;
  height?: string;
  isHover?: boolean;
  cursor?: 'default' | 'pointer' | 'none';
  name: string;
  color?: 'red' | 'blue' | 'grey' | 'white';

};

export const ConstuctorIcon: FC<TConstuctorIcon> = ({
  picture, onClick, width, height, isHover, onBlur, cursor, name, color,
}) => {
  const [filter, setFilter] = useState('invert(8%) sepia(82%) saturate(17%) hue-rotate(211deg) brightness(85%) contrast(109%)');
  useEffect(() => {
    switch (color) {
      case 'red':
        setFilter('invert(66%) sepia(85%) saturate(6339%) hue-rotate(339deg) brightness(110%) contrast(113%);');
        break;
      case 'blue':
        setFilter('invert(41%) sepia(91%) saturate(3306%) hue-rotate(190deg) brightness(101%) contrast(107%)');
        break;
      case 'grey':
        setFilter('invert(37%) sepia(11%) saturate(254%) hue-rotate(202deg) brightness(98%) contrast(89%)');
        break;
      case 'white':
        setFilter('invert(100%) sepia(1%) saturate(2%) hue-rotate(129deg) brightness(116%) contrast(100%)');
        break;
      default:
        null;
    }
  }, [color]);
  return (
    <ContainerIcon onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} filter={filter}>
      <img src={picture} alt={name} />
    </ContainerIcon>
  );
};
