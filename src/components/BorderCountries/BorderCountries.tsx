import { Button } from '../Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCountriesByCodesQuery } from '../../redux/countriesAPI/countriesAPI';
import { BorderButtonsWrapperStyled } from './BorderCountries.styled';

export const BorderCountries = ({ borders = [] }: { borders: string[] }) => {
  const navigate = useNavigate();

  const { data } = useGetCountriesByCodesQuery(borders.join(','), {
    skip: borders.length === 0,
  });

  const countries: string[] = [];
  if (data) {
    data.forEach(country => {
      countries.push(country.name.common);
    });
  }

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.textContent) {
      return;
    }
    navigate(`/countries/${e.currentTarget.textContent.toLowerCase()}`);
  };

  return (
    <BorderButtonsWrapperStyled>
      {countries.length
        ? countries.map(country => (
            <Button
              key={country}
              onClickHandler={onButtonClick}
              label={country}
            />
          ))
        : '-'}
    </BorderButtonsWrapperStyled>
  );
};
