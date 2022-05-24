import regions from 'regions.json';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SelectMui } from '../SelectMui/SelectMui';
import { ThemeProvider } from '@mui/material';
import { themeMui } from '../../theme';
// import { Select } from '../Select/Select';
// import { Option } from '../Select/Option/Option';

export const FindBar = () => {
  const navigate = useNavigate();
  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target) {
      const path = `/regions/${e.target.value.toLowerCase()}`;
      navigate(path);
    }
  };

  const [activeRegion, setActiveRegion] = useState('');
  const { region } = useParams();

  useEffect(() => {
    if (!region) {
      return;
    }
    const regionCapitalize = region.replace(region[0], region[0].toUpperCase());

    if (!regions.includes(regionCapitalize)) {
      navigate('/not-found');
      return;
    }
    setActiveRegion(regionCapitalize);
  }, [navigate, region]);

  return (
    <div>
      <input type="text" />
      <ThemeProvider theme={themeMui}>
        <SelectMui />
      </ThemeProvider>
      {/*<Select onSelect={selectHandler}>*/}
      {/*  {regions.map(region => (*/}
      {/*    <Option key={region} selected={region === activeRegion}>*/}
      {/*      {region}*/}
      {/*    </Option>*/}
      {/*  ))}*/}
      {/*</Select>*/}
    </div>
  );
};
