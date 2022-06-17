import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import Select from '@mui/material/Menu';
import Option from '@mui/material/MenuItem';

export const ButtonSelectStyled = styled(Button)(
  ({ theme }) => `
  justify-content: space-between;
  width: 200px;
  padding: 16px 16px;

  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  color: inherit;
  text-transform: none;

  box-shadow: ${theme.emotion.palette.boxShadow};
  background-color: ${theme.emotion.palette.elementsColor};
  

    &:hover {
      background-color: ${theme.emotion.palette.elementsColor};
    }
    &:focus {
      background-color: ${theme.emotion.palette.elementsColor};
      box-shadow: 0 0 0 2px ${theme.emotion.palette.activeColor};
    }
  `,
);

export const SelectStyled = styled(Select)(
  ({ theme }) => `
  margin-top: 8px;
    & ul {
      padding: 10px 0;
      background-color: ${theme.emotion.palette.elementsColor};
    }
`,
);

export const OptionStyled = styled(Option)(
  ({ theme }) => `
    width: 200px;
    min-height: 0;
    padding: 4px 16px;

    font-size: 14px;
    color: ${theme.emotion.palette.textColor};
    font-family: 'Nunito Sans', sans-serif;

    background-color: ${theme.emotion.palette.elementsColor};
    
    &:focus, &:hover {
      border-bottom: 2px solid ${theme.emotion.palette.activeColor};
      padding-bottom: 2px;
    }
`,
);

export const ButtonResetRegionStyled = styled(Button)(
  ({ theme }) => `
    font-size: 14px;  
    color: inherit;
    text-transform: none;
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
    &:focus {
      box-shadow: 0 0 0 2px ${theme.emotion.palette.activeColor};
    }
`,
);
