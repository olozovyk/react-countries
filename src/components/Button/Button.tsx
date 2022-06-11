import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

interface Props {
  label: string;
  onClickHandler(): void;
  IconLeft?: SvgIconComponent;
  IconRight?: SvgIconComponent;
}

export const Button = ({
  label,
  onClickHandler,
  IconLeft,
  IconRight,
}: Props) => {
  return (
    <button type="button" onClick={onClickHandler}>
      {IconLeft && <IconLeft />}
      <span>{label}</span>
      {IconRight && <IconRight />}
    </button>
  );
};
