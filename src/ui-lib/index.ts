import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
// import GlobalColorsStyles from './globalColorsStyled';
// import GlobalFontsStyles from './globalFontsStyled';
import {
  EditIcon,
  DeleteIcon,
  AvatarIcon,
  PlusIcon,
  MinusIcon,
  LoginIcon,
  HomeIcon,
  AsterixIcon,
  CheckIcon,
  LikeIcon,
  LogoutIcon,
  NoLikeIcon,
  PaperClipIcon,
} from './icons';

import { EditPostButton, DeletePostButton, OpenMenuButton } from './buttons';

const GlobalStyles = createGlobalStyle`
  ${normalize}
`;

export default GlobalStyles;

export {
  PlusIcon,
  HomeIcon,
  LoginIcon,
  MinusIcon,
  EditIcon,
  DeleteIcon,
  AvatarIcon,
  AsterixIcon,
  CheckIcon,
  LikeIcon,
  NoLikeIcon,
  LogoutIcon,
  PaperClipIcon,
  EditPostButton,
  DeletePostButton,
  OpenMenuButton,
};
