import React from 'react';
import { ICountry } from 'types/ICountry';

interface IProps {
  data: ICountry[];
}

export const CountriesList: React.FC<IProps> = ({ data = [] }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '800px',
        margin: '0 auto',
      }}
    >
      {data.map(country => (
        <li key={country.name.common}>
          <img src={country.flags.png} alt="" loading="lazy" />
        </li>
      ))}
    </ul>
  );
};
