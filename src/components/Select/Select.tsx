import { ChangeEvent, ReactElement } from 'react';

interface Props {
  children: ReactElement[];
  onSelect(e: ChangeEvent<HTMLSelectElement>): void;
}

export const Select = ({ children, onSelect }: Props) => {
  return (
    <>
      <span>Find By Regions</span>
      <select onChange={onSelect} name="region">
        {children}
      </select>
    </>
  );
};
