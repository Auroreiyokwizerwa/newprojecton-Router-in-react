import React from 'react'
import Linginier from './Linginier';
import {Link} from 'react-router-dom';
import navbar from '../style/navbar.css';

function Navbar() {
  return (
    <>
    <nav>
        <div className='nav-box'>
            <span className='online-shopping'>
                <Link to='/' className='nav-link'> ONLINE SHOOPING STORE </Link></span>
            <div className='cart'>
              <span><Link to='cart'className='link-plus'> <i className="fas fa-cart-plus"></i></Link> </span>
            </div>
        </div>
        <span >
          <button className='add-btn'><Link to='/Add-New'className='butto'> ADD NEW ITEM</Link></button> </span>
    </nav>
    </>

  )
}

export default Navbar