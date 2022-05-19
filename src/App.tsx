import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>



        <Route index element={<Home />} />
        {/*<Route path="regions/:region" element={<Regions />} />*/}
        <Route path="detail/:country" element={<div>Country</div>} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
