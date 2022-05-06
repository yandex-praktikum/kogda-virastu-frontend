import styled from 'styled-components'

import { FC } from 'react';

type TcontainerIconStyle =  {
    width?:string;
    height?: string;
    isHover?:boolean;
    cursor?: 'default' | 'pointer' | 'none';
}

const ContainerIcon = styled.div<TcontainerIconStyle>`
width: ${({width = '24px'}) => width};
height:${({height = '24px'}) => height};
cursor: ${({cursor = 'pointer'}) => cursor };
${({isHover}) => isHover ? `:hover {opacity:0.5}`: '' }
`
type TConstuctorIcon = {
    onClick?(e: React.MouseEvent<HTMLDivElement>): void;
    onBlur?(e?: React.FocusEvent<HTMLDivElement>): void;
    picture:any
    width?:string;
    height?: string;
    isHover?: boolean;
    cursor?: 'default' | 'pointer' | 'none';
    name:string;
}


export const ConstuctorIcon:FC<TConstuctorIcon> = ({picture, onClick, width, height, isHover, onBlur, cursor, name}) => {

    return(
        <>
        <ContainerIcon onClick={onClick} width = {width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} >
        <img src={picture} alt={name} />
        </ContainerIcon>
        </>
    )
}
