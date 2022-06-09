import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
import { toggleTheme } from 'redux/theme/themeSlice';
import { themeValue } from 'redux/theme/themeSelectors';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ButtonToggleTheme = () => {
  const dispatch = useDispatch();
  const onClickToggleHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button
      label={useSelector(themeValue) === 'light' ? 'Dark Mode' : 'Light Mode'}
      onClickHandler={onClickToggleHandler}
      Icon={useSelector(themeValue) === 'light' ? DarkModeIcon : LightModeIcon}
    />
  );
};
