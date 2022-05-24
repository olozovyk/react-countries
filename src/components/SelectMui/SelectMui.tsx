import * as React from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Menu';
import Option from '@mui/material/MenuItem';
import regions from 'regions.json';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const SelectMui = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        sx={{ textTransform: 'none', width: '200px' }}
        onClick={handleClick}
      >
        Filter by Region
      </Button>
      {/*Original component name is Menu from Material UI, renamed by me to Select*/}
      <Select
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ left: 0, top: 6 }}
      >
        {regions.map(region => (
          <Option key={region} onClick={handleClose} sx={{ width: '200px' }}>
            {region}
          </Option>
        ))}
      </Select>
    </>
  );
};
