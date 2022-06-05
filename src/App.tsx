import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Main } from 'pages/Main';
import { Detail } from 'pages/Detail';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="regions/:region" element={<Main />} />
      <Route path="countries/:country" element={<Detail />} />
      {/*Style 404 page*/}
      <Route path="*" element={<div>404</div>} />
    </Route>
  </Routes>
);

export default App;
