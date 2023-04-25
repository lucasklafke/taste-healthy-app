import { DefaultTheme } from 'styled-components'
const theme:Theme = {
  colors: {
    main: '#749EB2',
    primary: '#749EB2',
    secondary: '#21BACF',
    success: 'green',
    danger: '#FF4D4D',
    warning: 'orange',
    lightText: '#f5f5f5',
    lightBlue: '#E8F0FE',
    darkText: '#333333'
  },
  fonts: {
    primary: 'Lato, sans-serif',
    titles: 'Montserrat, sans-serif',
  },
  fontSizing: {
    deskTitles:'36px',
    mobTitles: '32px',
    deskSubtitles: '28px',
    mobSubtitles: '24px',
    deskSectionTitle: '24px',
    deskLabel: '20px',
    mobLabel: '16px',
    mobSectionTitle: '20px',
    deskText: '20px',
    mobText: '16px',
    DeskSmallText: '16px',
    mobSmallText: '14px',
    DeskDescriptions: '12px',
    MobDescriptions: '10px'
  },
  spacing: {
    Desksmall: '8px',
    Deskmedium: '16px',
    Desklarge: '24px',
    MobSmall: '4px',
    MobMedium: '8px',
    Moblarge: '12px'
  },
  borderRadius: '0'
}
export type Theme = DefaultTheme &{
  colors: {
    primary: '#749EB2',
    secondary: '#21BACF',
    success: 'green',
    danger: string,
    warning: 'orange',
    lightBlue: string,
    lightText: '#f5f5f5',
    darkText: '#333333'
  },
  fonts: {
    primary: 'Lato, sans-serif',
    titles: 'Montserrat, sans-serif',
  },
  fontSizing: {
    deskTitles:'36px',
    mobTitles: '32px',
    deskSubtitles: '28px',
    mobSubtitles: '24px',
    deskSectionTitle: '24px',
    mobSectionTitle: '20px',
    deskText: '20px',
    mobText: '16px',
    DeskSmallText: '16px',
    mobSmallText: '14px',
    DeskDescriptions: '12px',
    MobDescriptions: '10px',
    deskLabel: '20px',
    mobLabel: '16px',
  },
  spacing: {
    Desksmall: '8px',
    Deskmedium: '16px',
    Desklarge: '24px',
    MobSmall: '4px',
    MobMedium: '8px',
    Moblarge: '12px'
  },
  borderRadius: string
}

export default theme