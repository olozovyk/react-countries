import { useSelector } from 'react-redux';
import { themeValue } from 'redux/theme/themeSelectors';
import { themeMuiLight, themeMuiDark } from 'theme';

export const useSelectMuiTheme = () => {
  const currentTheme = useSelector(themeValue);

  return currentTheme === 'light' ? themeMuiLight : themeMuiDark;
};
