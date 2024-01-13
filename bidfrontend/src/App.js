import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Authenticate from './pages/authenticate';
import Shop from './pages/shop';

import Vendeur from './pages/Vendeur';

import CadreInfos from './components/cadreInfos';


function App() {
  return (
    <Routes>
      <Route  index element={<Home />} />
      <Route path='/authenticate' element={<Authenticate />} />
      <Route path='/shop' element={<Shop />} />

      <Route path='/vendeur' element={<Vendeur />} />

      <Route path="/article/:id" element={<CadreInfos />} />

    </Routes>
  );
}

export default App;
