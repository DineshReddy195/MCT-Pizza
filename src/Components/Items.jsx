import React, { useEffect, useState } from 'react'
import './Items.css'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router-dom'
import { forwardRef } from 'react'

function Items({searchRef})  {
  const navigate=useNavigate()
  const [products,setProducts]=useState([])
  useEffect(()=>{
    list()
  },[])
  const url = 'https://pizzaallapala.p.rapidapi.com/productos';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '768d6b335cmsh919d097e5789ba5p11a5e0jsnac841190b603',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
    };
    
    const list=async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setProducts(result.productos)
            console.log(products);
           
        } 
        catch (error) {
            console.error(error);
        }

    }
    const cart=()=>{
      navigate('/order')
    }
    const details=()=>{
      navigate('/quickview')
    }
  return (
    <div className='pizza-list'>
      <Nav/>
      <div className='pizzas' searchRef={searchRef}>
        {products.length>0?<div className='map-pizzas'>
          {products.map((items)=>{
            return <div className='main'>
              <img src={items.linkImagen} width={200} height={200} className='pizza-image'/>
              <h3>{items.descripcion}</h3>
                <p>Price: {items.precio}</p>
                <div className='buttons'>
              <button className='cart' onClick={cart}>Add To Cart</button>&nbsp;&nbsp;
              <Link to={`/quickview/${items.id}`}><button className='view' onClick={details}>Quick View</button></Link>
              </div>
            </div>
          })}
        </div>:<h1>No Items To Display</h1>}
      </div>
    </div>
  )
}

export default forwardRef(Items)
