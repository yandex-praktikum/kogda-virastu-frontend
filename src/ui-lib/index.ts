import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import GlobalColorsStyles from './globalColorsStyled';
import GlobalFontsStyles from './globalFontsStyled';

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
  ${GlobalColorsStyles}
  ${GlobalFontsStyles}
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
};
