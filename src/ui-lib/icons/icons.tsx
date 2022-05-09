import { FC } from 'react';
import heartFull from '../../assets/imges/icons/heartFull.png';
import close from '../../assets/imges/icons/close.png';
import daw from '../../assets/imges/icons/daw.png';
import edit from '../../assets/imges/icons/edit.png';
import heart from '../../assets/imges/icons/heart.png';
import home from '../../assets/imges/icons/home.png';
import login from '../../assets/imges/icons/login.png';
import minus from '../../assets/imges/icons/minus.png';
import setting from '../../assets/imges/icons/setting.png';
import plus from '../../assets/imges/icons/plus.png';
import exit from '../../assets/imges/icons/exit.png';
import basket from '../../assets/imges/icons/basket.png';
import clip from '../../assets/imges/icons/clip.png';
import { ConstuctorIcon } from './configIcon';
type Ticons = {
    onClick?(e: React.MouseEvent<HTMLDivElement>): void;
    onBlur?(e?: React.FocusEvent<HTMLDivElement>): void;
    width?: string;
    height?: string;
    isHover?: boolean;
    cursor?: 'default' | 'pointer' | 'none';
    color?: 'red' | 'blue' | 'grey' | 'white';

}
export const HeartsFullIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={heartFull} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Лайк'} color={color} />
        </>
    )
}
export const CloseIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={close} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'закрыть'} color={color} />
        </>
    )
}
export const DawIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={daw} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'ок'} color={color} />
        </>
    )
}
export const EditIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={edit} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Изменить'} color={color} />
        </>
    )
}
export const HeartIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={heart} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Сердце'} color={color} />
        </>
    )
}
export const HomeIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={home} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Домой'} color={color} />
        </>
    )
}
export const LoginIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={login} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Войти'} color={color} />
        </>
    )
}
export const MinusIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={minus} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Минус'} color={color} />
        </>
    )
}
export const SettingIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={setting} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Настройки'} color={color} />
        </>
    )
}
export const PlusIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={plus} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Плюс'} color={color} />
        </>
    )
}
export const ExitIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={exit} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Выйти'} color={color} />
        </>
    )
}
export const BasketIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={basket} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Корзина'} color={color} />
        </>
    )
}
export const ClipIcon: FC<Ticons> = ({ onClick, width, height, isHover, onBlur, cursor, color }) => {
    return (
        <>
            <ConstuctorIcon picture={clip} onClick={onClick} width={width} height={height} isHover={isHover} onBlur={onBlur} cursor={cursor} name={'Корзина'} color={color} />
        </>
    )
}















