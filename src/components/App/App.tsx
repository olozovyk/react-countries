import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { MainPage } from '../../pages/MainPage.tsx';
import { DetailPage } from '../../pages/DetailPage.tsx';
import { ThemeProvider } from '@emotion/react';
import { useSelectTheme } from '../../hooks/useSelectTheme';
import { AppStyled } from './App.styled';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <MainPage />,
        path: 'regions/:region',
      },
      {
        element: <DetailPage />,
        path: 'countries/:country',
      },
      {
        element: <div>This is 404 error page</div>,
        path: '*',
      },
    ],
  },
]);

const App = () => {
  const theme = useSelectTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <RouterProvider router={router} />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
