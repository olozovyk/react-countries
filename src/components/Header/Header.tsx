import { ButtonToggleTheme } from '../ButtonToggleTheme/ButtonToggleTheme';
import { Container } from '../Container/Container';
import {
  HeaderContent,
  HeaderStyled,
  HeaderTitle,
  HeaderTitleLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <HeaderContent>
          <HeaderTitleLink to="/">
            <HeaderTitle>Where in the world?</HeaderTitle>
          </HeaderTitleLink>
          <ButtonToggleTheme />
        </HeaderContent>
      </Container>
    </HeaderStyled>
  );
};
