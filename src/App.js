import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Linginier from './components/Linginier';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNewItem from './components/AddNewItem';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='' element={<Linginier />} />
            <Route path='Add-New' element={<AddNewItem />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
