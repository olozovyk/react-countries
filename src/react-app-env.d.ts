/// <reference types="react-scripts" />
interface ICountry {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  tld: string[];
  currencies:
    | {
        [key: string]: {
          name: string;
        };
      }
    | undefined;
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  population: number;
  flags: {
    png: string;
  };
}

/*
  "name": {
      "official": "Uruguay",
      "nativeName": {
        [key: string] : {      
          "official": "Uruguay"
        }
      }
  },
  "tld": string[],
  "currencies": {
    [key: string]: {
      "name": "string"
    }
  },
  "capital": ["Montevideo"],
  "region": "Americas",
  "subregion": string,
  "languages": {
    [key: string]: string
  },
  "population": 11111,
  "flags": {
      "png": "https://.../"
  }
*/
