import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import './Menus.css'

function Menu() {
  const [items,setItems]=useState([])
  useEffect(()=>{
    pizzaList()
  },[])
  const url = 'https://pizzaallapala.p.rapidapi.com/productos';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '768d6b335cmsh919d097e5789ba5p11a5e0jsnac841190b603',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
    };
    
    const pizzaList=async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setItems(result.productos)
            console.log(items);
           
        } 
        catch (error) {
            console.error(error);
        }

    }
  return (
    <div className='menus'>
    <Nav/>
    <div className='items'>
      {items.map((data)=>{
        return <div className='mapping'>
          <img src={data.linkImagen} width={200} height={200} className='pizza-image'/>
          <h2>{data.nombre}</h2>
          <h3>{data.descripcion}</h3>
          <p>Price: {data.precio}</p>
        </div>
      })}
    </div>
    </div>
  )
}

export default Menu
