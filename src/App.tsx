import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Main } from 'pages/Main';
import { Detail } from 'pages/Detail';
import { Theme, ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { light, dark } from './theme';
import { themeValue } from './redux/theme/themeSelectors';

const App = () => {
  const currentTheme = useSelector(themeValue);

  const getTheme = (): Theme => {
    return currentTheme === 'light' ? light : dark;
  };

  return (
    <ThemeProvider theme={getTheme()}>
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
    </ThemeProvider>
  );
};

export default App;
