import { useState, MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import regions from '../../assets/regions.json';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ThemeProvider } from '@mui/material';
import { useSelectMuiTheme } from '../../hooks/useSelectMuiTheme';

import {
  BoxStyled,
  ButtonResetRegionStyled,
  ButtonSelectStyled,
  OptionStyled,
  SelectStyled,
} from './SelectRegion.styled';

export const SelectRegion = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const params = useParams();

  const region = params.region;
  let regionCapitalize;
  if (region) {
    regionCapitalize = region.replace(region[0], region[0].toUpperCase());
    if (!regions.includes(regionCapitalize)) {
      navigate('/not-found');
    }
  }

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
      const path = `/regions/${region.toLowerCase()}`;
      navigate(path);
    }
  };

  const handleReset = () => {
    navigate('/');
  };

  const theme = useSelectMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <BoxStyled>
        <ButtonSelectStyled
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableFocusRipple={true}
          disableRipple={true}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleSelectClick}
        >
          {regionCapitalize ?? 'Filter by Region'}
        </ButtonSelectStyled>
        {/*Original component name is Menu from Material UI, renamed by me to SelectRegion*/}
        <SelectStyled
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          autoFocus={false}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {regions.map(region => (
            <OptionStyled key={region} onClick={handleOptionClick}>
              {region}
            </OptionStyled>
          ))}
        </SelectStyled>
        {region && (
          <ButtonResetRegionStyled
            disableFocusRipple={true}
            disableRipple={true}
            onClick={handleReset}
          >
            Show all countries
          </ButtonResetRegionStyled>
        )}
      </BoxStyled>
    </ThemeProvider>
  );
};
