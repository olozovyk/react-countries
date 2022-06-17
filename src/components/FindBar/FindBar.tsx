import React from 'react';

import { SelectRegion } from '../SelectRegion/SelectRegion';

import { Container } from '../Container/Container';
import { SearchCountry } from '../SearchCountry/SearchCountry';
import { FindBarStyled } from './FindBar.styled';

interface IProps {
  searchChangeHandler(e: React.ChangeEvent): void;
}

export const FindBar: React.FC<IProps> = ({ searchChangeHandler }) => {
  return (
    <FindBarStyled>
      <Container>
        <SearchCountry searchChangeHandler={searchChangeHandler} />
        <SelectRegion />
      </Container>
    </FindBarStyled>
  );
};
