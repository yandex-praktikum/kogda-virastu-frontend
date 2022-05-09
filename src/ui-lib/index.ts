import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import GlobalColorsStyles from './globalColorsStyled';
import GlobalFontsStyles from './globalFontsStyled';
import { EditIcon, DeleteIcon, AvatarIcon } from './icons';
import { EditPostButton, DeletePostButton, OpenMenuButton } from './buttons';

import {
  PlusIcon,
  CloseIcon,
  DawIcon,
  HeartIcon,
  HeartsFullIcon,
  HomeIcon,
  LoginIcon,
  MinusIcon,
  SettingIcon,
  ExitIcon,
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
  DeleteIcon,
  AvatarIcon,
  EditPostButton,
  DeletePostButton,
  OpenMenuButton,
};
