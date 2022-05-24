import styled from '@emotion/styled';

export const TestDiv = styled.div`
  color: ${({ theme: { palette } }) => palette.elementsColor};
  background-color: green;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    background-color: ${({ theme: { palette } }) => palette.backgroundColor};
  }
`;

// export const CustomButton = styledMui(Button)(
//   () => `
//   color: ${light.palette.inputColor};
//   background-color: rgb(255, 255, 0)
// `,
// ) as typeof Button;
