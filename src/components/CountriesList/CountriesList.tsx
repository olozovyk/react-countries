import React, { RefObject } from 'react';

interface IProps {
  data: ICountry[];
  refLiElement: RefObject<HTMLLIElement>;
}

export const CountriesList: React.FC<IProps> = ({
  data = [],
  refLiElement,
}) => {
  return (
    <ul>
      {data.map(country => (
        <li key={country.name.common} ref={refLiElement}>
          {/*Add Link into Li from react-router-dom*/}
          <div>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              loading="lazy"
            />
          </div>
          <h2>{country.name.common}</h2>
          <p>
            <span>Population: </span>
            {country.population !== undefined ? country.population : 'No data'}
          </p>
          <p>
            <span>Region: </span>
            {country.region !== undefined ? country.region : 'No data'}
          </p>
          <p>
            <span>Capital: </span>
            {country.capital !== undefined
              ? country.capital.join(', ')
              : 'No data'}
          </p>
        </li>
      ))}
    </ul>
  );
};
