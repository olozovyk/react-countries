import styled from '@emotion/styled';

export const ButtonToggleThemeStyled = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 8px 0;
  gap: 6px;
  color: inherit;
  background-color: ${({ theme }) => theme.palette.elementsColor};
  border: none;
  cursor: pointer;

  & svg {
    font-size: 20px;
  }
`;
