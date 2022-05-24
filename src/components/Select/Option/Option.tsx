import React from 'react';

interface IProps {
  children: string;
  selected: boolean;
}

export const Option = ({ children, selected }: IProps) => {
  return (
    <option value={children} selected={selected}>
      {children}
    </option>
  );
};
