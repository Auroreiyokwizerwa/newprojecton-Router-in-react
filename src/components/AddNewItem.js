import React from 'react'
import { useState } from 'react'
import addnewitem from'../style/addnewitem.css'; 
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AddNewItem = (props) => {
    const [items, setItems] = useState({ id: "", title: "", description: "", price: "", category: "",thumbnail:"" })

    const changeItem = (e) => {
        setItems({...items,[e.target.name]:e.target.value})
    }

    const addItem = () => {
        props.setData([...props.data, items])
        setItems({id: "", title: "", description: "", price: "", category: "",thumbnail:""})
   
    }

    return (
        <>
            <section>
            
                <div className='form-container'>
                    <div className='form'><br></br>
                        <h1>ADD NEW ITEM</h1>
                        <label>ID</label>
                        <input value={items.id} onChange={changeItem}  type="number" placeholder="id" name="id"  />
                        <label>TITLE:</label>
                        <input value={items.title} onChange={changeItem}  type="text" placeholder="title" name="title"  />
                        <label >DESCRIPTION:</label>
                        <input value={items.description} onChange={changeItem} type="text" placeholder="description" name="description" /> 
                        <label >PRICE:</label>
                        <input value={items.price} onChange={changeItem} type="number" placeholder="price" name="price" />
                        <label >CATEGORY:</label>
                        <input value={items.category} onChange={changeItem}  type="text" placeholder="category" name="category"  />
                        <label >IMAGE:</label>
                        <input value={items.thumbnail} onChange={changeItem} type="file" placeholder="image" name="thumbnail"/> 

                        <button onClick={addItem}  type="submit">ADD NEW ITEM</button><br></br>
                        <Link className='btn btn-danger ml-5' to="/">Back to homepage</Link>

                       {/* {JSON.stringify(items)} */}
                    </div>

                </div>
            </section>
        </>

    )
}

export default AddNewItem  