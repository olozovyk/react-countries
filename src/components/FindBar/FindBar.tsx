import { ThemeProvider } from '@mui/material';
import { SelectRegion } from '../SelectRegion/SelectRegion';
import { themeMui } from '../../theme';

export const FindBar = () => {
  return (
    <div>
      <input type="text" />
      <ThemeProvider theme={themeMui}>
        <SelectRegion />
      </ThemeProvider>
    </div>
  );
};
