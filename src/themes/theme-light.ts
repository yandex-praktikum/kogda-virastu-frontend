import {
  activeUserMenuColor,
  blue,
  blueActive,
  blueHover,
  dividerGray,
  greySecondary,
  hoverUserMenuColor,
  mainBgColor,
  primaryBlack,
  red,
  redActive,
  redHover,
  shadowGrey,
  grey,
  paleGrey,
  redAccess,
} from '../constants/colors';
import {
  defaultH1,
  defaultH1Mobile,
  defaultH2,
  defaultH2Mobile,
  defaultH3,
  defaultH3Mobile,
  defaultH4,
  defaultH4Mobile,
  defaultH5,
  defaultH5Mobile,
  defaultText18,
  defaultTextSans18,
  defaultTextSans12,
  defaultTextSansMed18,
} from '../constants/fontsconfigs';
import { TTheme } from '../types/styles.types';

const themeLight : TTheme = {
  primaryText: primaryBlack,
  secondaryText: greySecondary,
  markedText: blue,
  dividerColor: dividerGray,
  bgPrimary: mainBgColor,
  bgHoverUserMenu: hoverUserMenuColor,
  bgActiveUserMenu: activeUserMenuColor,
  labelColor: greySecondary,
  inputField: {
    defaultBorder: dividerGray,
    borderHover: shadowGrey,
    borderActive: grey,
    disabledInput: paleGrey,
    errorColor: redAccess,
  },
  button: {
    blue: {
      default: blue,
      hover: blueHover,
      active: blueActive,
      disabled: dividerGray,
      font: mainBgColor,
    },
    red: {
      default: red,
      hover: redHover,
      active: redActive,
      disabled: dividerGray,
      font: mainBgColor,
    },
  },
  buttonText: defaultTextSansMed18,
  firstLevelHeading: defaultH1,
  secondLevelHeading: defaultH2,
  thirdLevelHeading: defaultH3,
  fourthLevelHeading: defaultH4,
  fifthLevelHeading: defaultH5,
  firstLevelHeadingMobile: defaultH1Mobile,
  secondLevelHeadingMobile: defaultH2Mobile,
  thirdLevelHeadingMobile: defaultH3Mobile,
  fourthLevelHeadingMobile: defaultH4Mobile,
  fifthLevelHeadingMobile: defaultH5Mobile,
  textSans: defaultTextSans18,
  text: defaultText18,



  labelInput:defaultTextSans16,


  text18Sans: defaultTextSans18,
  text16Sans: defaultTextSans16,
  text12Sans: defaultTextSans12,
  text18: defaultText18,

};

export default themeLight;
