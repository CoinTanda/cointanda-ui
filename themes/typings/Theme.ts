export interface Theme {
  colors: ThemeColors;
  shadows: ThemeShadows;
  fonts: ThemeFonts;
  borders: ThemeBorders;
}

interface ThemeColors {
  general1: string;
  background1: string;
  text1: string;
  text2: string;
  buttonText1: string;
  buttonText2: string;
  buttonBackground1: string;
  buttonBackground2: string;
  buttonBackground3: string;
  buttonBackground4: string;
  buttonBackgroundDisabled: string;
  scrollbar: string;
  scrollbarThumb: string;
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
  borderRadius1: string;
}
