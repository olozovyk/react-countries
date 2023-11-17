import { useSelector } from 'react-redux';
import { themeValue } from '../redux/theme/themeSelectors';
import { light, dark } from '../theme';

export const useSelectTheme = () => {
  const currentTheme = useSelector(themeValue);

  return currentTheme === 'light' ? light : dark;
};
