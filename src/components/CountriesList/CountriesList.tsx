import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { populationNormalize } from '../../helpers/populationNormalize';

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
      {data.map(country => {
        const { name, region, capital } = country;
        return (
          <li key={name.common} ref={refLiElement}>
            {/*Add Link into Li from react-router-dom*/}
            <div>
              <Link to={`/countries/${name.common.toLowerCase()}`}>
                <img
                  src={country.flags.png}
                  alt={`Flag of ${name.common}`}
                  loading="lazy"
                />
              </Link>
            </div>
            <h2>{name.common}</h2>
            <p>
              <span>Population: </span>
              {country.population !== undefined
                ? populationNormalize(country.population)
                : 'No data'}
            </p>
            <p>
              <span>Region: </span>
              {region !== undefined ? region : 'No data'}
            </p>
            <p>
              <span>Capital: </span>
              {capital !== undefined ? capital.join(', ') : 'No data'}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
