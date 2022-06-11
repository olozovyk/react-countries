import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  padding: 0 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    padding: 0 80px;
  }
`;
