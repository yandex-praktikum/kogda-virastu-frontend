import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import GlobalColorsStyles from './globalColorsStyled';
import GlobalFontsStyles from './globalFontsStyled';

import {
  EditIcon,
  CrossIcon,
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

import {
  EditPostButton,
  DeletePostButton,
  OpenMenuButton,
  FollowButton,
  UnfollowButton,
  LoginButton,
  RegisterButton,
  UpdateProfileButton,
  PostCommentButton,
  PublishPostButton,
  SavePostButton,
  ConfirmDeleteButton,
} from './buttons';

import {
  FieldUrl,
  FieldLogin,
  FieldEmail,
  FieldPassword,
  FieldNewPassword,
  FieldNameArticle,
  FieldDescriptionArticle,
  FieldTegs
}
from './inputFields'

import Divider from './divider';

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
  CrossIcon,
  EditPostButton,
  DeletePostButton,
  OpenMenuButton,
  FollowButton,
  UnfollowButton,
  LoginButton,
  RegisterButton,
  UpdateProfileButton,
  PostCommentButton,
  PublishPostButton,
  SavePostButton,
  ConfirmDeleteButton,
  Divider,
  FieldUrl,
  FieldLogin,
  FieldEmail,
  FieldPassword,
  FieldNewPassword,
  FieldNameArticle,
  FieldDescriptionArticle,
  FieldTegs
};
