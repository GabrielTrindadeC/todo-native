export const lightTheme = {
  FONT_FAMILY: {
    REGULAR: 'Barlow_400Regular',
    BOLD: 'Barlow_700Bold',
    MEDIUM: 'Barlow_500Medium',
    SEMI_BOLD: 'Barlow_600SemiBold',
  },
  FONT_SIZE: {
    SM: '10px',
    MD: '12px',
    LG: '14px',
    XL: '16px',
    XXL: '18px',
    XXXL: '20px',
    XXXXL: '24px',
    XXXXXL: '26px',
    XXXXXXL: '28px',
  },
  COLORS: {
    BACKGROUND: '#F6F7F9',
    FONT_COLOR: '#000000',
    FONT_COLOR_SECONDARY: '##FFFFFF',
    WHITE: '#FFFFFF',
    SUCESS_DEFAULT: '#17A1A1',
    ERROR_DEFAULT: '#FF486A',
    WARNING_DEFAULT: '#FD8311',
    CARD_COLOR: '#FFFFFF',
  },
};
export const darkTheme = {
  ...lightTheme,
  COLORS: {
    ...lightTheme.COLORS,
    BACKGROUND: '#000000',
    FONT_COLOR: '#FFFFFF',
    FONT_COLOR_SECONDARY: '#000000',
    CARD_COLOR: '#212121',
  },
};
