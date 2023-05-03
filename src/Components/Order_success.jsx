import React from 'react'
import Nav from './Nav'
import './Order-success.css'
import { useNavigate } from 'react-router-dom'

function Order_success() {
  const navigate=useNavigate()
  const gotoHome=()=>{
    navigate('/')
  }
  return (
    <div className='side-menu'>
      <Nav/>
    <div className='success'>
      <img src='https://cdn.dribbble.com/users/583807/screenshots/5187139/v5.gif' width={400} height={400} style={{marginLeft:''}} />
      <h1 style={{textAlign:'center'}}>Order Confirmed</h1>
      <button onClick={gotoHome} className='return-home'>Return To Home</button>
    </div>
    </div>

  )
}

export default Order_success
