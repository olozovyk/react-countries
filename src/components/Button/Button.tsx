import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { ButtonStyled } from './Button.styled';

interface Props {
  label: string;
  onClickHandler(): void;
  Icon?: SvgIconComponent;
}

export const Button = ({ label, onClickHandler, Icon }: Props) => {
  return (
    <ButtonStyled type="button" onClick={onClickHandler}>
      {Icon && <Icon />}
      <span>{label}</span>
    </ButtonStyled>
  );
};
