import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.elementsColor};
  box-shadow: ${({ theme }) => theme.palette.boxShadow};
  border-radius: 4px;
  padding: 10px 24px;
  color: ${({ theme }) => theme.palette.inputColor};

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.activeColor};
  }
`;

export const InputStyled = styled.input`
  margin-left: 24px;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.palette.inputColor};
  }

  &:focus-visible {
    outline: none;
  }
`;
