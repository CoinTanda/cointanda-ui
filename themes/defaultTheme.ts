import { screenSizes } from './tools/screenSizes';
import { Theme } from './typings/Theme';

export const defaultTheme: Theme = {
  colors: {
    general1: '#3433CD',
    background1: '#FFFFFF',
    text1: '#A8A8A8',
    text2: '#9899FE',
    text3: '#5d5d5d',
    text4: 'black',
    textMobileTitle: 'black',
    buttonText1: 'white',
    buttonText2: '#5654D4',
    buttonBackground1: 'white',
    buttonBackground2: '#3433CD',
    buttonBackground3: '#FF9934',
    buttonBackground4: '#9A99FF',
    buttonBackground5: '#7776ca',
    buttonBackgroundDisabled: '#9A99FF',
    scrollbar: '#FFFFFF',
    scrollbarThumb: '#565656',
    borderColor1: '#FFFFFF',
  },
  shadows: {
    elevation1: '1px 10px 0px 0px #00000024;',
  },
  fonts: {
    font1: '"Lato", sans-serif',
    size1: '20px',
    weight1: '600',
    letterSpacing1: '-0.26px',
    lineHeight1: '21px',
  },
  borders: {
    border1: 'solid 1px',
    borderRadius1: '6.3px',
  },
  screenSizes,
  queries: {
    mobileS: `(max-width: ${screenSizes.mobileS}px)`,
    mobileM: `(max-width: ${screenSizes.mobileM}px)`,
    mobileL: `(max-width: ${screenSizes.mobileL}px)`,
    tablet: `(max-width: ${screenSizes.tablet}px)`,
    tabletL: `(max-width: ${screenSizes.tabletL}px)`,
    tabletXL: `(max-width: ${screenSizes.tabletXL}px)`,
    desktop: `(max-width: ${screenSizes.desktop}px)`,
  },
};
