import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Authenticate from './pages/authenticate';


function App() {
  return (
    <Routes>
      <Route  index element={<Home />} />
      <Route path='/authenticate' element={<Authenticate />} />
    </Routes>
  );
}

export default App;
