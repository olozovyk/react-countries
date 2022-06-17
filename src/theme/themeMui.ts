import { createTheme } from '@mui/material';
import { light, dark } from './theme';

export const themeMui = createTheme();

export const themeMuiLight = createTheme({
  emotion: light,
});

export const themeMuiDark = createTheme({
  emotion: dark,
});
