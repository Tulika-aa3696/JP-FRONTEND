import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Home/>}></Route>
      <Route path='/register' element={<Home/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
