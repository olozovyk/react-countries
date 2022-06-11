const lightPalette = {
  backgroundColor: 'hsl(0, 0%, 98%)',
  textColor: 'hsl(200, 15%, 8%)',
  inputColor: 'hsl(0, 0%, 52%)',
  elementsColor: 'hsl(0, 0%, 100%)',
};

const darkPalette = {
  backgroundColor: 'hsl(207, 26%, 17%)',
  textColor: 'hsl(0, 0%, 100%)',
  inputColor: 'hsl(0, 0%, 100%)',
  elementsColor: 'hsl(209, 23%, 22%)',
};

const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const light = {
  palette: lightPalette,
  breakpoints,
};

export const dark = {
  palette: darkPalette,
  breakpoints,
};
