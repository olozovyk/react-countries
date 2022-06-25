import styled from '@emotion/styled';

export const FindBarStyled = styled.div`
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  padding: 30px 0 0px;
  margin-top: 5px;
`;

export const FindBarWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.small}) {
    display: flex;
    justify-content: space-between;
  }
`;
