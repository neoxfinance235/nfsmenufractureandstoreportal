import React from 'react'
import {NavLink} from 'react-router-dom'
import { ImCross } from "react-icons/im";
const Nav = () => {
  const handelCloseMenu = () => {
    document.getElementById('nav').style.display = 'none'
  }
  const profilepic = localStorage.getItem('profilepic')
  return (
    <>
      <nav id='nav'>
        <div className="user-box">
          <div className="user-value">
            <img src={profilepic} alt="profile pic" />
            <h3>{localStorage.getItem('name')}</h3>
          </div>
          <ImCross className='c-r' onClick={handelCloseMenu} id='cross-btn' />
        </div>
        <ul>
          <NavLink to={'/'} ><li>HOME</li></NavLink>
          <NavLink to={'/add/new/product'}><li>ADD NEW PRODUCT</li></NavLink>
          <NavLink to={'/all/products/api/v4'} ><li>ALL PRODUCTS</li></NavLink>
          <NavLink to={'/promote/product/v4'}><li>PROMOTE PRODUCTS</li></NavLink>
          <NavLink to={'/orders/api/v4'}><li>ORDERS</li></NavLink>
          <NavLink to={'/completed/products/api/v4'} ><li>COMPLETED</li></NavLink>
          <NavLink to={'/api/user/all/own/orders/api/v4'}><li>YOUR ORDERS</li></NavLink>
          <NavLink to={'/api/user/get/products/api/v4'}><li>PRODUCTS</li></NavLink>
          <NavLink to={'/confirm/order/api/v4'}><li>CONFIRM</li></NavLink>
          <NavLink to={'/profile'}><li>PROFILE</li></NavLink>
          <NavLink to={'/api/user/cart/api/v4'}><li>CART</li></NavLink>
          <NavLink to={'/report'}><li>REPORT</li></NavLink>
          <NavLink to={'/setting'}><li>SETTING</li></NavLink>

        </ul>
      </nav>
    </>
  )
}

export default Nav
