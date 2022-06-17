import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  height: 60px;
  padding: 10px 24px;

  color: ${({ theme }) => theme.palette.inputColor};
  background-color: ${({ theme }) => theme.palette.elementsColor};
  box-shadow: ${({ theme }) => theme.palette.boxShadow};
  border-radius: 4px;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.activeColor};
  }
`;

export const InputStyled = styled.input`
  margin-left: 24px;
  width: 100%;
  height: 100%;

  color: inherit;
  border: none;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.palette.inputColor};
  }

  &:focus-visible {
    outline: none;
  }
`;
