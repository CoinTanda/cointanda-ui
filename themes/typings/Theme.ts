import { ScreenSizes } from 'themes/tools/screenSizes';

export interface Theme {
  colors: ThemeColors;
  shadows: ThemeShadows;
  fonts: ThemeFonts;
  borders: ThemeBorders;
  screenSizes: ScreenSizes;
  queries: MediaQueries;
}

interface ThemeColors {
  general1: string;
  background1: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  textMobileTitle: string;
  buttonText1: string;
  buttonText2: string;
  buttonBackground1: string;
  buttonBackground2: string;
  buttonBackground3: string;
  buttonBackground4: string;
  buttonBackground5: string;
  buttonBackgroundDisabled: string;
  scrollbar: string;
  scrollbarThumb: string;
  borderColor1: string;
}

interface ThemeShadows {
  elevation1: string;
}

interface ThemeFonts {
  font1: string;
  size1: string;
  weight1: string;
  letterSpacing1: string;
  lineHeight1: string;
}

interface ThemeBorders {
  border1: string;
  borderRadius1: string;
}

interface MediaQueries {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  tabletL: string;
  tabletXL: string;
  desktop: string;
}
