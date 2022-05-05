import styled from '@emotion/styled';

export const TestDiv = styled.div`
  color: ${props => props.theme.textColor};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    background-color: ${props => props.theme.backgroundColor};
  }
`;
