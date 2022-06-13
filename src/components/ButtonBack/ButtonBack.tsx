import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const ButtonBack = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };

  return (
    <Button
      label="Back"
      Icon={KeyboardBackspaceIcon}
      onClickHandler={onClickHandler}
    />
  );
};
