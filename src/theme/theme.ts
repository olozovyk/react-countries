const lightPalette = {
  backgroundColor: 'hsl(0, 0%, 98%)',
  textColor: 'hsl(200, 15%, 8%)',
  inputColor: 'hsl(0, 0%, 52%)',
  elementsColor: 'hsl(0, 0%, 100%)',
  activeColor: 'hsl(40, 100%, 45%)',
  boxShadow: '0 0 5px 1px rgba(133, 133, 133, .3)',
};

const darkPalette = {
  backgroundColor: 'hsl(207, 26%, 17%)',
  textColor: 'hsl(0, 0%, 100%)',
  inputColor: 'hsl(0, 0%, 100%)',
  elementsColor: 'hsl(209, 23%, 22%)',
  activeColor: 'hsl(40, 100%, 45%)',
  boxShadow: '0 0 2px 1px rgba(133, 133, 133, .2)',
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
