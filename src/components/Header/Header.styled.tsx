import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.palette.elementsColor};
  box-shadow: ${({ theme }) => theme.palette.boxShadow};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const HeaderTitle = styled.h1`
  padding: 14px 0;
  font-size: 16px;
`;
