/// <reference types="react-scripts" />
interface ICountry {
  flags: {
    png: string;
  };
  name: {
    common: string;
    nativeName?: {
      [key: string]: {
        common?: string;
      };
    };
  };
  population?: number;
  region?: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?:
    | {
        [key: string]: {
          name: string;
        };
      }
    | undefined;
  languages: {
    [key: string]: string;
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
