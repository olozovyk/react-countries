import { Button } from 'components/Button/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCountriesByCodesQuery } from '../../redux/countriesAPI/countriesAPI';
import { BorderButtonsWrapperStyled } from './BorderCountries.styled';

export const BorderCountries = ({ borders = [] }: { borders: string[] }) => {
  const [counties, setCountries] = useState<string[]>([]);
  const [skipLoad, setSkipLoad] = useState<boolean>(true);

  const navigate = useNavigate();

  const { data } = useGetCountriesByCodesQuery(borders.join(','), {
    skip: skipLoad,
  });

  useEffect(() => {
    if (borders.length > 0) {
      setSkipLoad(false);
    }
  }, [borders]);

  useEffect(() => {
    if (!data) {
      return;
    }
    const countriesArr: string[] = [];
    data.forEach(country => {
      countriesArr.push(country.name.common);
    });
    setCountries(countriesArr);
  }, [data]);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.textContent) {
      return;
    }
    navigate(`/countries/${e.currentTarget.textContent.toLowerCase()}`);
  };

  return (
    <BorderButtonsWrapperStyled>
      {counties.length
        ? counties.map(country => (
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
