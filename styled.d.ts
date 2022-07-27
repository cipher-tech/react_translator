import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string,
            colorPrimary: string,
            colorPrimaryLight: string,
            colorPrimaryLight2: string,

            colorRed: string,
            colorAccentRed: string,

            colorGreen: string,
            colorAccentGreen: string,

            colorBlack: string,
            colorBlackFaded: string,

            colorWhite: string,
            colorGrey: string,
            colorGrey2: string,
            colorLightGrey: string,
            colorDark: string,
            colorTextDark: string,
            colorTextDark2: string,
            colorLight: string,
        },
        font: {
            size: {
                vLarge: string,
                xxxxLarge: string,
                xxxLarge: string,
                xxLarger: string,
                xLarge: string,
                large: string,
                medium: string,
                small: string,
                xSmall: string,
                xxSmall: string,
                xxxSmall: string,
                xxxxSmall: string,
            },
            family: {
                mainFont: string,
            },
        },
        breakPoints: {
            bpLargest: string, //1700px
            bpxxLarge: string, // 1500px
            bpxLarge: string, // 1110px
            bpLarge: string, //900px
            bpMedium2: string, //800px
            bpMedium: string, //700px
            bpSmall2: string, //650px
            bpSmall: string, //600px
            bpSmall3: string, //600px
            bpxSmall: string,
        }
    }
}