import React, { useRef } from 'react'
import Nav from './Nav'
import './Home.css'
import Items from './Items'

function Home() {
  const searchRef=useRef(null)
  const handleClick=()=>{
    searchRef.current?.scrollIntoView({behavior:'smooth'})
  }
  return (
    <>
    <div className='menu-list'>
     <Nav/>
    <div className='home'>
      <div className='page'>
      </div>
      <div className='text'>
        <h1>DELIVERY TO THE<br/>DOORSTEP</h1><br/>
        <p>Choose Your ingridients</p>
        <p>Get Free Delivery 24/7</p>
        <p>Special gift coupons</p><br/>
        <input type='email' placeholder='Email' className='mail'/>&nbsp;
        <button className='subscribe'>Subscribe</button>
        <i class="fa-solid fa-down-long" onClick={handleClick}>Click here to scroll down</i>
      </div>
    </div>
    </div>
    <Items searchRef={searchRef}/>
    </>
  )
}

export default Home
