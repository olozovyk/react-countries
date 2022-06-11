import { ReactElement } from 'react';
import { ContainerStyled } from './Container.styled';

export const Container = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => <ContainerStyled>{children}</ContainerStyled>;
