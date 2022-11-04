import React from 'react'
import { useState } from 'react'
import addnewitem from'../style/addnewitem.css';
import { Link } from 'react-router-dom';

const AddNewItem = (onadd,setOnAdd) => {
    const [items, setItems] = useState({ id: "", title: "", description: "", price: "", category: "" })
    const [thumbnail,setThumbnail]=useState('')
    const changeItem = (e) => {
        setItems({...items,[e.target.name]:e.target.value})
    }

    const addItem = () => {
        setOnAdd([...onadd, items])
        setItems({id: "", title: "", description: "", price: "", category: ""})
        setThumbnail({thumbnail:""})
        
    }

    return (
        <>
            <section>
                <div className='form-container'>
                    <div className='form'><br></br>
                        <h1>ADD NEW ITEM</h1>
                        <label for="">ID</label>
                        <input value={items.id} onChange={changeItem}  type="number" placeholder="id" name="id"  />
                        <label for="">TITLE:</label>
                        <input value={items.title} onChange={changeItem}  type="text" placeholder="title" name="title"  />
                        <label for="">DESCRIPTION:</label>
                        <input value={items.description} onChange={changeItem} type="text" placeholder="description" name="description" /> 
                        <label for="">PRICE:</label>
                        <input value={items.price} onChange={changeItem} type="number" placeholder="price" name="price" />
                        <label for="">CATEGORY:</label>
                        <input value={items.category} onChange={changeItem}  type="text" placeholder="category" name="category"  />
                        <label for="">IMAGE:</label>
                        <input value={thumbnail} onChange={(e) =>setThumbnail(e.target.value)} type="file" placeholder="image" name="thumbnail"/> 

                        <button onClick={addItem}  type="submit">ADD NEW ITEM</button><br></br>
                        <Link className='btn btn-danger ml-5' to="/">Back to homepage</Link>
                    </div>

                </div>
            </section>
        </>

    )
}

export default AddNewItem  