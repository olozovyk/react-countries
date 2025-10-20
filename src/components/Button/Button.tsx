import React, { ComponentPropsWithoutRef } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { ButtonStyled } from './Button.styled';

interface Props extends ComponentPropsWithoutRef<'button'>{
  label: string;
  onClickHandler(e: React.MouseEvent<HTMLButtonElement>): void;
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
