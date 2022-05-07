import { colors } from "../constants/colors"
import { config } from "../constants/fontsconfigs"

type TTheme = {
    light: { [key: string]: string | { [key: string]: string } }
}

export const theme: TTheme = {
    'light': {
        primaryText: colors.black,
        secondaryText: colors.darkgrey,
        navLinkTextColor: colors.blue,
        colorGray: colors.grey,
        deviderColor: colors.lightgrey,
        bgPrimary: colors.milkwhite,
        bgHoverUserMenu: colors.lightblue,
        bgActiveUserMenu: colors.lightblueV2,
        blueButton: {
            default: colors.blue,
            hover: colors.skyblue,
            active: colors.deepblue
        },
        redButton: {
            default: colors.red,
            hover: colors.richred,
            active: colors.deepred
        },
        blockedButton: colors.lightgrey,
        firstLevelHeading: config.defaultH1,
        secondLevelHeading: config.defaultH2,
        thirdLevelHeading: config.defaultH3,
        fourthLevelHeading: config.defaultH4,
        fifthLevelHeading: config.defaultH5,
        firstLevelHeadingMobile: config.defaultH1Mobile,
        secondLevelHeadingMobile: config.defaultH2Mobile,
        thirdLevelHeadingMobile: config.defaultH3Mobile,
        fourthLevelHeadingMobile: config.defaultH4Mobile,
        fifthLevelHeadingMobile: config.defaultH5Mobile,
        textSans: config.defaultTextSans18,
        text: config.defaultText18,
    }
}
