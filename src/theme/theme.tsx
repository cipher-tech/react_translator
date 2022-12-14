// import { DefaultTheme } from 'styled-components';

const theme = {
    colors: {
        primary: "#1c73e8",
        colorPrimary: "#1c73e8",
        colorPrimaryLight: "#e5ecfa",
        colorPrimaryLight2: "#006FF2",

        colorRed: "#EE0000",
        colorAccentRed: "#FFEFEF",

        colorBlack: "#000000",
        colorBlackFaded: "#0000008a",

        colorWhite: "#FFFFFF",
        colorGrey: "#B2B2B2",
        colorGrey2: "#f5f5f5",
        colorLightGrey: "#EDEDED",
        colorDark: "##333333",
        colorTextDark: "#3C3B3B",
        colorTextDark2: "#010101",
        colorLight: "#676767"
    },
    font: {
        size: {
            vLarge: "6.5rem",
            xxxxLarge: "6rem",
            xxxLarge: "5.5rem",
            xxLarger: "5rem",
            xLarge: "4.8rem",
            large: "4.1rem",
            medium: "3.8rem",
            small: "3.1rem",
            xSmall: "2.4rem",
            xxSmall: "2rem",
            xxxSmall: "1.6rem",
            xxxxSmall: "1.3rem"
        },
        family: {
            mainFont: "Rosario"
        }
    },
    breakPoints: {
        bpLargest: "1900px", //1700px
        bpxxLarge: "93.75rem", // 1500px
        bpxLarge: "69.375rem", // 1110px
        bpLarge: "56.25rem", //900px
        bpMedium2: "50rem", //800px
        bpMedium: "43.75rem", //700px
        bpSmall2: "40.625rem", //650px
        bpSmall: "37.5rem", //600px
        bpSmall3: "500px", //500px
        bpxSmall: "400px"
    }
};
type ThemeType = typeof theme;
export default theme;

export type {ThemeType}