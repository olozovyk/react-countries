import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };

  return <Button label="back" onClickHandler={onClickHandler} />;
};
