import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Authenticate from './pages/authenticate';
import Shop from './pages/shop';


function App() {
  return (
    <Routes>
      <Route  index element={<Home />} />
      <Route path='/authenticate' element={<Authenticate />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
  );
}

export default App;
