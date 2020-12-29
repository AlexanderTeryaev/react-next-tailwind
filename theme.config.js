const {
  ThemeBuilder,
  Theme
} = require('tailwindcss-theming')

const COLORS = {
  BLACK: '#000000',
  ALMOST_BLACK: '#1C1C24',
  SECONDARY_BLACK: '#44444F',
  GREY_900: '#171725',
  GREY_800: '#13131A',
  GREY_700: '#292932',
  GREY_600: '#4F4F5A',
  GREY_500: '#696974',
  GREY_400: '#92929D',
  GREY_300: '#B5B5BE',
  GREY_200: '#E2E2EA',
  GREY_100: '#F1F1F5',
  WHITE: '#FFFFFF',
  ALMOST_WHITE: '#FAFAFB',
  BLUE: '#1E75FF',
  LIGHT_SKY_BLUE: '#0062FF',
  RED: '#FC5A5A',
  YELLOW: '#FF974A',
  GREEN: '#3DD598',
  BLUE_400: '#63b3ed'
}

const darkTheme = new Theme()
  .name('dark')
  .default()
  .assignable()
  .colors({
    background: COLORS.ALMOST_BLACK,
    'white-almost-black': COLORS.ALMOST_BLACK,
    'on-background': COLORS.ALMOST_WHITE,
    title: COLORS.ALMOST_WHITE,
    'sub-title': COLORS.ALMOST_WHITE,
    'almost-white-500': COLORS.ALMOST_WHITE,
    blue: COLORS.BLUE,
    'light-blue': COLORS.LIGHT_SKY_BLUE,
    'blue-light-blue': COLORS.BLUE,
    'almost-white-light-blue': COLORS.ALMOST_WHITE,
    white: COLORS.WHITE,
    green: COLORS.GREEN,
    yellow: COLORS.YELLOW,
    'on-almostwhite': COLORS.ALMOST_WHITE,
    'white-almost-white': COLORS.ALMOST_WHITE,
    red: COLORS.RED,
    gray500: COLORS.GREY_500,
    gray400: COLORS.GREY_400,
    gray300: COLORS.GREY_300,
    gray45: COLORS.GREY_400,
    gray25: COLORS.GREY_200,
    gray35: COLORS.GREY_300,
    gray23: COLORS.GREY_200,
    gray34: COLORS.GREY_300,
    gray54: COLORS.GREY_500,
    gray71: COLORS.GREY_700,
    'b-gray': COLORS.SECONDARY_BLACK,
    'bg-blue-400': COLORS.BLUE_400,
    'white-popup': COLORS.GREY_700,
    'almost-white-700': COLORS.GREY_700,
    'filter-btn': COLORS.SECONDARY_BLACK,
    'xs-gray': COLORS.GREY_300,
    'cal-date': COLORS.GREY_500,
    'secondary-black-200': COLORS.GREY_200,
    'gray-49': COLORS.GREY_400,
    'gray-39': COLORS.GREY_300,
    'gray-300': COLORS.GREY_300,
    'secondary-black-almost-white': COLORS.SECONDARY_BLACK,
    'secondary-black-400': COLORS.GREY_400,
    'secondary-black-100': COLORS.SECONDARY_BLACK
  })

const lightTheme = new Theme()
  .name('light')
  .assignable()
  .colors({
    background: COLORS.WHITE,
    'white-almost-black': COLORS.WHITE,
    'on-background': COLORS.SECONDARY_BLACK,
    title: COLORS.GREY_900,
    'sub-title': COLORS.SECONDARY_BLACK,
    'almost-white-500': COLORS.GREY_500,
    blue: COLORS.BLUE,
    'light-blue': COLORS.LIGHT_SKY_BLUE,
    'blue-light-blue': COLORS.LIGHT_SKY_BLUE,
    'almost-white-light-blue': COLORS.LIGHT_SKY_BLUE,
    white: COLORS.WHITE,
    green: COLORS.GREEN,
    yellow: COLORS.YELLOW,
    'on-almostwhite': COLORS.ALMOST_WHITE,
    'white-almost-white': COLORS.WHITE,
    red: COLORS.RED,
    gray500: COLORS.GREY_500,
    gray400: COLORS.GREY_400,
    gray300: COLORS.GREY_300,
    gray45: COLORS.GREY_500,
    gray25: COLORS.GREY_500,
    gray35: COLORS.GREY_500,
    gray23: COLORS.GREY_300,
    gray34: COLORS.GREY_400,
    gray54: COLORS.GREY_400,
    gray71: COLORS.GREY_100,
    'b-gray': COLORS.GREY_200,
    'white-popup': COLORS.WHITE,
    'almost-white-700': COLORS.ALMOST_WHITE,
    'filter-btn': COLORS.GREY_300,
    'xs-gray': COLORS.SECONDARY_BLACK,
    'cal-date': COLORS.SECONDARY_BLACK,
    'secondary-black-200': COLORS.SECONDARY_BLACK,
    'gray-49': COLORS.GREY_900,
    'gray-39': COLORS.GREY_900,
    'gray-300': COLORS.GREY_300,
    'secondary-black-almost-white': COLORS.ALMOST_WHITE,
    'secondary-black-400': COLORS.SECONDARY_BLACK,
    'secondary-black-100': COLORS.GREY_100
  })

module.exports = new ThemeBuilder()
  .hexadecimal()
  .asDataThemeAttribute()
  .default(darkTheme)
  .theme(lightTheme)
