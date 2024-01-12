import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Authenticate from './pages/authenticate';
import Shop from './pages/shop';
<<<<<<< HEAD
import Acheteur from './pages/Acheteur';
=======
import CadreInfos from './components/cadreInfos';

>>>>>>> 07c098bfc67503b1492cce02112f87471dcb7c08
function App() {
  return (
    <Routes>
      <Route  index element={<Home />} />
      <Route path='/authenticate' element={<Authenticate />} />
      <Route path='/shop' element={<Shop />} />
<<<<<<< HEAD
      <Route path='/acheteur' element={<Acheteur />} />
=======
      <Route path="/article/:id" element={<CadreInfos />} />
>>>>>>> 07c098bfc67503b1492cce02112f87471dcb7c08
    </Routes>
  );
}

export default App;
