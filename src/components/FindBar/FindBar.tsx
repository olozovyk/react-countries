import regions from 'regions.json';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from '../Select/Select';
import { Option } from '../Select/Option/Option';

export const FindBar = () => {
  const navigate = useNavigate();
  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target) {
      const path = `/regions/${e.target.value.toLowerCase()}`;
      navigate(path);
    }
  };

  return (
    <div>
      <input type="text" />
      <Select onSelect={selectHandler}>
        {regions.map(region => (
          <Option key={region}>{region}</Option>
        ))}
      </Select>
    </div>
  );
};
