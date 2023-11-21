import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { MainPage } from '../../pages/MainPage.tsx';
import { DetailPage } from '../../pages/DetailPage.tsx';
import { ThemeProvider } from '@emotion/react';
import { useSelectTheme } from '../../hooks/useSelectTheme';
import { AppStyled } from './App.styled';

const App = () => {
  const theme = useSelectTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="regions/:region" element={<MainPage />} />
            <Route path="countries" element={<MainPage />} />
            <Route path="countries/:country" element={<DetailPage />} />
            {/*Style 404 page*/}
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
