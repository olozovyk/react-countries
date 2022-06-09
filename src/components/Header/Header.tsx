import { ButtonToggleTheme } from '../ButtonToggleTheme/ButtonToggleTheme';

export const Header = () => {
  return (
    <header>
      <h1>Where in the world?</h1>
      {/*Dark mode will toggle to "Light Mode"*/}
      <ButtonToggleTheme />
    </header>
  );
};
