import styled from '@emotion/styled';

export const TestDiv = styled.div`
  color: ${({ theme }) => theme.palette.elementsColor};
  background-color: ${({ theme }) => theme.palette.backgroundColor};
`;

// export const CustomButton = styledMui(Button)(
//   () => `
//   color: ${light.palette.inputColor};
//   background-color: rgb(255, 255, 0)
// `,
// ) as typeof Button;
