import React, { RefObject } from 'react';
import { ICountry } from 'types/ICountry';

interface IProps {
  data: ICountry[];
  refLiElement: RefObject<HTMLLIElement>;
}

export const CountriesList: React.FC<IProps> = ({
  data = [],
  refLiElement,
}) => {
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
        <li key={country.name.common} ref={refLiElement}>
          <img
            style={{ height: '200px', width: '300px' }}
            src={country.flags.png}
            alt=""
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};
