import { PropsWithChildren } from 'react';
import { ContainerStyled } from './Container.styled';

export const Container = ({ children }: PropsWithChildren) => (
  <ContainerStyled>{children}</ContainerStyled>
);
