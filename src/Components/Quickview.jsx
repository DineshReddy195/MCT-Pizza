import React, { useEffect, useState } from 'react'
import './Quickview.css'
import { useNavigate, useParams } from 'react-router-dom'

const Quickview = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [pizza,setPizza]=useState([])
  useEffect(()=>{
    getPizzas()
  },[])
  const url = `https://pizzaallapala.p.rapidapi.com/productos`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '768d6b335cmsh919d097e5789ba5p11a5e0jsnac841190b603',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
    };
    
    const getPizzas=async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setPizza(result.productos)
            console.log(pizza);
           
        } 
        catch (error) {
            console.error(error);
        }

    }
  const clickedItem=pizza.find((element)=>element.id===parseInt(id))
  const cart=()=>{
    navigate('/order')
  }
  return (
    <div className='interface'>
      <div className='left-panel'>
        {clickedItem&&(
          <div>
            <img src={clickedItem.linkImagen} width={400} height={400}/>
          </div>
        )}
      </div>
      <div className='right-panel'>
        {clickedItem&&(
          <div>
            <h2>{clickedItem.nombre}</h2>
            <p>Rs: {clickedItem.precio}</p>
            <h3>About: {clickedItem.descripcion}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis dignissimos voluptates suscipit adipisci nam alias, dicta nemo quaerat voluptas perspiciatis ratione error illo autem, architecto cupiditate! Quidem, fugiat aperiam?</p>
            <button className='cart' onClick={cart}>Add To Cart</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quickview
