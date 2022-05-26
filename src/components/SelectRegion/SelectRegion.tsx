import { useState, MouseEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Select from '@mui/material/Menu';
import Option from '@mui/material/MenuItem';
import regions from 'regions.json';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const SelectRegion = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectRegion, setSelectRegion] = useState<string>('Filter by Region');
  const [showReset, setShowReset] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const region = params.region;
    if (!region) {
      return;
    }

    const regionCapitalize = region.replace(region[0], region[0].toUpperCase());

    if (!regions.includes(regionCapitalize)) {
      navigate('/not-found');
      return;
    }

    setSelectRegion(regionCapitalize);
    setShowReset(true);
  }, [navigate, params.region]);

  const handleSelectClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (event: MouseEvent<HTMLLIElement>) => {
    handleClose();

    if (event.currentTarget.textContent) {
      const region = event.currentTarget.textContent;
      setSelectRegion(region);
      setShowReset(true);
      const path = `/regions/${region.toLowerCase()}`;
      navigate(path);
    }
  };

  const handleReset = () => {
    setShowReset(false);
    setSelectRegion('Filter by Region');
    navigate('/');
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleSelectClick}
        sx={{ textTransform: 'none' }}
      >
        {selectRegion}
      </Button>
      {/*Original component name is Menu from Material UI, renamed by me to SelectRegion*/}
      <Select
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {regions.map(region => (
          <Option key={region} onClick={handleOptionClick}>
            {region}
          </Option>
        ))}
      </Select>
      {showReset && (
        <Button
          onClick={handleReset}
          sx={{ textTransform: 'none', textDecoration: 'underline' }}
        >
          Show all countries
        </Button>
      )}
    </>
  );
};
