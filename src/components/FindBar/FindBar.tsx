import { ThemeProvider } from '@mui/material';
import { SelectRegion } from '../SelectRegion/SelectRegion';
import { themeMui } from '../../theme';

interface IProps {
  searchChangeHandler(e: React.ChangeEvent): void;
}

export const FindBar: React.FC<IProps> = ({ searchChangeHandler }) => {
  return (
    <div>
      <input onChange={searchChangeHandler} type="text" />
      <ThemeProvider theme={themeMui}>
        <SelectRegion />
      </ThemeProvider>
    </div>
  );
};
