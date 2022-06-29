import React from 'react';

import { SelectRegion } from '../SelectRegion/SelectRegion';

import { Container } from '../Container/Container';
import { SearchCountry } from '../SearchCountry/SearchCountry';
import { FindBarStyled, FindBarWrapper } from './FindBar.styled';

interface IProps {
  searchChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const FindBar: React.FC<IProps> = ({ searchChangeHandler }) => {
  return (
    <FindBarStyled>
      <Container>
        <FindBarWrapper>
          <SearchCountry searchChangeHandler={searchChangeHandler} />
          <SelectRegion />
        </FindBarWrapper>
      </Container>
    </FindBarStyled>
  );
};
