import { primaryBalck, greySecondary, blueActive, blue, blueHover, red, redActive, redHover, deviderGray, mainBgColor, hoverUserMenuColor, activeUserMenuColor } from "../constants/colors"
import { defaultTextSans18, defaultTextSansMed18, defaultText18, defaultH1, defaultH2, defaultH3, defaultH4, defaultH5, defaultH1Mobile, defaultH2Mobile, defaultH3Mobile, defaultH4Mobile, defaultH5Mobile } from "../constants/fontsconfigs"

type TTheme = {
    [key:string]: { [key: string]: string | { [key: string]: string | number } }
}

export const theme: TTheme = {
    'light': {
        primaryText: primaryBalck,
        secondaryText: greySecondary,
        markedText: blue,
        deviderColor: deviderGray,
        bgPrimary: mainBgColor,
        bgHoverUserMenu: hoverUserMenuColor,
        bgActiveUserMenu: activeUserMenuColor,
        blueButton: {
            default: blue,
            hover: blueHover,
            active: blueActive,
        },
        redButton: {
            default: red,
            hover: redHover,
            active: redActive,
        },
        blockedButton: deviderGray,

        firstLevelHeading: defaultH1, 
        secondLevelHeading: defaultH2,
        thirdLevelHeading: defaultH3 ,
        fourthLevelHeading: defaultH4,
        fifthLevelHeading: defaultH5,
        firstLevelHeadingMobile:defaultH1Mobile,
        secondLevelHeadingMobile: defaultH2Mobile,
        thirdLevelHeadingMobile:defaultH3Mobile,
        fourthLevelHeadingMobile: defaultH4Mobile,
        fifthLevelHeadingMobile: defaultH5Mobile,
        textSans: defaultTextSans18,
        text: defaultText18,
        textMedium: defaultTextSansMed18,
    }
}


