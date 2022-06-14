import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { InputStyled, InputWrapper } from './SearchCountry.styled';

interface IProps {
  searchChangeHandler(e: React.ChangeEvent): void;
}

export const SearchCountry = ({ searchChangeHandler }: IProps) => {
  return (
    <InputWrapper>
      <SearchOutlinedIcon />
      <InputStyled
        type="text"
        onChange={searchChangeHandler}
        autoComplete="false"
        placeholder="Search for a country..."
      />
    </InputWrapper>
  );
};
