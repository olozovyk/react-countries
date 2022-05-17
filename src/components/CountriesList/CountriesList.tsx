import React, { RefObject } from 'react';
import { ICountry } from 'types/ICountry';

interface IProps {
  data: ICountry[];
  listItemRef: RefObject<HTMLLIElement>;
}

export const CountriesList: React.FC<IProps> = ({ data = [], listItemRef }) => {
  console.log(listItemRef);
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
        <li key={country.name.common} ref={listItemRef}>
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
