import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

interface Props {
  label: string;
  onClickHandler(): void;
  Icon?: SvgIconComponent;
}

export const Button = ({ label, onClickHandler, Icon }: Props) => {
  return (
    <button type="button" onClick={onClickHandler}>
      <span>{label}</span>
      {Icon && <Icon />}
    </button>
  );
};
