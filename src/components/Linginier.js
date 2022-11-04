import React from 'react'
import axios from 'axios';
import Cards from './Cards';
import {useState} from 'react';
import AddNewItem from './AddNewItem';

function Linginier() {

const[items, setItems]=useState([]);
const fetchProducts = async () =>{
  const response =await axios.get("https://dummyjson.com/products?limit=6");
  setItems(response.data.products);
}
if(items.length<1){
  fetchProducts();
}
  return (
    <section>
      {
        items.map((item,index)=>(
          <Cards key={index} item={item}/>
        ))
      }
    </section>
  )
}

export default Linginier