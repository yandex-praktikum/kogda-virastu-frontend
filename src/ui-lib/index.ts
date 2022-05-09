import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import GlobalColorsStyles from './globalColorsStyled';
import GlobalFontsStyles from './globalFontsStyled';
import { DeleteIcon, AvatarIcon } from './icons';
import { EditPostButton, DeletePostButton, OpenMenuButton } from './buttons';



import {

  PlusIcon,
  CloseIcon,
  DawIcon,
  EditIcon,
  HeartIcon,
  HeartsFullIcon,
  HomeIcon,
  LoginIcon,
  MinusIcon,
  SettingIcon,
  ExitIcon,
  BasketIcon,
} from './icons/icons';

const GlobalStyles = createGlobalStyle`
  ${normalize}
`;

export default GlobalStyles;
export {

  PlusIcon,
  CloseIcon,
  DawIcon,
  EditIcon,
  HeartIcon,
  HeartsFullIcon,
  HomeIcon,
  LoginIcon,
  MinusIcon,
  SettingIcon,
  ExitIcon,

  BasketIcon,
    DeleteIcon,
  AvatarIcon,
  EditPostButton,
  DeletePostButton,
  OpenMenuButton,
} 



