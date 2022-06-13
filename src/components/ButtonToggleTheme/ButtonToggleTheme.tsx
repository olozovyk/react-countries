import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/theme/themeSlice';
import { themeValue } from 'redux/theme/themeSelectors';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ButtonToggleThemeStyled } from './ButtonToggleTheme.styled';

export const ButtonToggleTheme = () => {
  const dispatch = useDispatch();
  const onClickToggleHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <ButtonToggleThemeStyled type="button" onClick={onClickToggleHandler}>
      {useSelector(themeValue) === 'light' ? (
        <DarkModeIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
      {useSelector(themeValue) === 'light' ? 'Dark Mode' : 'Light Mode'}
    </ButtonToggleThemeStyled>
  );
};
