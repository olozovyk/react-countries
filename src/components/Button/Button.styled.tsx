import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  padding: 4px 24px;

  font-size: 18px;
  color: ${({ theme }) => theme.palette.textColor};

  background-color: ${({ theme }) => theme.palette.elementsColor};
  border: none;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.palette.boxShadow};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.palette.activeColor};
  }
`;
