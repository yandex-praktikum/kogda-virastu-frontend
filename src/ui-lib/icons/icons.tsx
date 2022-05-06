import { FC } from 'react';
import heartFull from '../../imges/icons/heartFull.png';
import {ConstuctorIcon} from './configIcon';

type Ticons = {
    onClick?(e: React.MouseEvent<HTMLDivElement>): void;
    onBlur?(e?: React.FocusEvent<HTMLDivElement>): void;
    width?:string;
    height?: string;
    isHover?: boolean;
    cursor?: 'default' | 'pointer' | 'none';
}
export const HeartsFullIcon:FC<Ticons> = ({onClick, width, height, isHover, onBlur, cursor}) => {
    return (
        <>
        <ConstuctorIcon picture={heartFull}  onClick={onClick} width = {width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Сердце'} />
        </>
    )
}
