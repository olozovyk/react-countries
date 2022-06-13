import styled from '@emotion/styled';

export const AppStyled = styled.div`
  color: ${({ theme }) => theme.palette.textColor};
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
`;

// export const CustomButton = styledMui(Button)(
//   () => `
//   color: ${light.palette.inputColor};
//   background-color: rgb(255, 255, 0)
// `,
// ) as typeof Button;
