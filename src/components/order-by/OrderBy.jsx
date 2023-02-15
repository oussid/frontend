import React, { useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import {ImCheckboxChecked, ImCheckboxUnchecked} from 'react-icons/im'
import { useClickAway } from 'react-use'
import './order-by.css'

export default function Filter(props) {
    const [orderVisiblity, setOrderVisiblity] = useState(false)
    const [orderBy, setOrderBy] = useState('')
    const orderItems = props.orderItems
    console.log(orderBy)

    const orderRef = useRef()

    useClickAway(orderRef, ()=>{
        setOrderVisiblity(false)
    })

    function applyOrder() {
        alert('order applied')
        setOrderVisiblity(false)
    }

    function toggleOrderVisibilty(){
        setOrderVisiblity(prev=>!prev)
    }


  return (
    <div className='order' ref={orderRef}>
        <div className="order-visible-area">
            <button className="order-visible-area-text" onClick={()=>toggleOrderVisibilty()}>
            Sort by  <FaChevronDown/>
            </button>
        </div>

       { 
       
       orderVisiblity && <div className="order-hidden-area">
            

            {
                orderItems.map(item => {
                    return<div className="order-item">
                            <button className='order-checkbox' onClick={()=> orderBy == item ? setOrderBy('')  : setOrderBy(item)}>
                            {orderBy==item? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}
                            </button>
    
                            <p className='order-item-name'>
                                {item}
                            </p>
                        </div>
                })
            }
            
            <button className="order-apply-btn" onClick={()=>applyOrder()}>
                Appliquer
            </button>
        </div>}
    </div>
  )
}
