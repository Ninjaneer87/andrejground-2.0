
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { blueGrey, cyan, grey } from '@material-ui/core/colors';
import { responsiveFontSizes } from '@material-ui/core/styles';



export const lightTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: cyan,
    custom: {
      textColor: grey[900],
      accent: cyan['A400'],
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadowColor: 'rgba(0, 0, 0, 0.15)',
      borderColor: 'transparent',
      appbarBorderColor: cyan[900],
      logoBgColor: 'rgba(0, 0, 0, 0.5)',
      cardBgColor: '#f5f5f5a3',
    },
    action: {
      disabled: '#bdbdbd'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 200,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
}));

export const darkTheme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: cyan,
    custom: {
      textColor: '#fff',
      accent: cyan['A400'],
      backgroundColor: grey[900],
      boxShadowColor: '#00e5ff44',
      borderColor: cyan[900],
      appbarBorderColor: cyan[900],
      logoBgColor: 'transparent',
      cardBgColor: '#212121bb',
    },
    action: {
      disabled: '#bdbdbd'
    }
    // type: 'dark'
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 200,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
}));