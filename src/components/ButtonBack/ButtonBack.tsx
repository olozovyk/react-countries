import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Container } from 'components/Container/Container';
import { ButtonBackWrapperStyled } from './ButtonBack.styled';

export const ButtonBack = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };

  return (
    <ButtonBackWrapperStyled>
      <Container>
        <Button
          label="Back"
          Icon={KeyboardBackspaceIcon}
          onClickHandler={onClickHandler}
        />
      </Container>
    </ButtonBackWrapperStyled>
  );
};
