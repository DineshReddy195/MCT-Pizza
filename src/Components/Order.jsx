import React, { useRef,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Order.css'

function Order() {
  const inputRef=useRef()
    const navigate=useNavigate()
    const ordered=()=>{
        navigate('/order-success')
    }
    if(inputRef===''||inputRef==='null'){
      alert(`input value can't be empty or null`)
    }
  return (
    <div className='order'>
      <div>
        <form className='form'>
            <div className=''>
              <section className='form-header'>
                <h2>WELCOME TO ITALIAN PIZZA</h2>
                <p>We deliver pizza in 40 minutes max. If not - Pizza's on us!</p>
                </section>
                <section className='inputs'>
                <label>Email</label><br/>
                <input type='email' className='mail-id' ref={inputRef}/><br/><br/>
                <label>Phone</label><br/>
                <input type='number' className='number' ref={inputRef} placeholder='Area'/>&nbsp;&nbsp;
                <input type='number' className='number' ref={inputRef} placeholder='Local'/>&nbsp;&nbsp;
                <input type='number' className='number' ref={inputRef} placeholder='Local'/><br/><br/>
                <label>Number Of Slices</label><br/>
                <input type='number' className='slices' ref={inputRef}/><br/><br/>
                <label>Pizza Size</label><br/>
                <input type='radio' name='size'/>8 inch&nbsp;&nbsp;
                <input type='radio' name='size'/>10 inch&nbsp;&nbsp;
                <input type='radio' name='size'/>12 inch&nbsp;&nbsp;
                <input type='radio' name='size'/>14 inch<br/><br/>
                <label>Toppings</label><br/>
                <input type='checkbox'/>Pepperoni&nbsp;&nbsp;
                <input type='checkbox'/>Onions&nbsp;&nbsp;
                <input type='checkbox'/>Mushrooms&nbsp;&nbsp;
                <input type='checkbox'/>Sausage<br/><br/>
                <input type='checkbox'/> &nbsp;
                <label>I agree to the TERMS AND CONDITIONS</label><br/>
                </section>
                </div>
                <div>
                <button className='order-now' onClick={ordered}>Order Now</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Order
