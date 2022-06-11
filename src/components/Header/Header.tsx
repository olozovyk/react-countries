import { ButtonToggleTheme } from '../ButtonToggleTheme/ButtonToggleTheme';
import { Container } from '../Container/Container';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <h1>Where in the world?</h1>
        <ButtonToggleTheme />
      </Container>
    </HeaderStyled>
  );
};
