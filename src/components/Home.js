import React from 'react'
import Navbar from './Navbar';
import Linginier from './Linginier';
import { Outlet } from 'react-router-dom';


function Home(props) {
  return (
    <>
   
     <Linginier data ={props.data}/>
    </>
  )
}

export default Home