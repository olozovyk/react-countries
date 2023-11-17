import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Main } from '../../pages/Main';
import { Detail } from '../../pages/Detail';
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
            <Route index element={<Main />} />
            <Route path="regions/:region" element={<Main />} />
            <Route path="countries" element={<Main />} />
            <Route path="countries/:country" element={<Detail />} />
            {/*Style 404 page*/}
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
