import React from 'react';
import cards from '../style/cards.css';
import CartItems from './CartItems';
import{useNavigate} from 'react-router-dom';

const Cards = ({item}) => {

    const { id,title,description,price,category,thumbnail } = item;
 const navigate =useNavigate();
    const addToCart =() =>{
        CartItems.push(item);
        navigate('/cart');
        
    }
    return (
        <section>
           
        < div className='cards'>
            <div className='image-box'>
                <img src={item.thumbnail} alt="image" />
            </div>
            <div className='details'>
                <p>{id}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}$</p>
                <p>{category}</p>
                <button onClick={()=>{ addToCart()}}>Add to Cart</button>
            </div>
            
        </div>
        </section>
    )
}

export default Cards