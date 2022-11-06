import React from 'react'
import axios from 'axios';
import Cards from './Cards';
import {useState} from 'react';
import AddNewItem from './AddNewItem';

function Linginier(props) {


  return (
    <section>
      {
       props.data.map((item,index)=>(
          <Cards key={index} item={item}/>
        ))
      }
    </section>
  )
}

export default Linginier