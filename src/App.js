
import './App.css';
import Navbar from './components/Navbar';
// import Cards from './components/Cards';
import Linginier from './components/Linginier';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNewItem from './components/AddNewItem';
import Home from './components/Home';
import {useState} from 'react';
import axios from 'axios';

function App() {

  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products?limit=6");
    setProduct(response.data.products);
  }
  if (product.length < 1) {
    fetchProducts();
  }
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home  data={product}/>}/>
            {/* <Route path='' element={<Linginier />} /> */}
          <Route path='Add-New' element={<AddNewItem setData={setProduct} data={product} />} />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
