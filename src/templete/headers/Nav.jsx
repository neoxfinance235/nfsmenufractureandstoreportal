import React from 'react'
import {NavLink} from 'react-router-dom'
import { ImCross } from "react-icons/im";
import { IoHomeSharp } from "react-icons/io5";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiLayout6Fill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { PiShippingContainer } from "react-icons/pi";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineDoneAll } from "react-icons/md";
import { MdOutlineWarning } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

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
          <NavLink to={'/'} ><li><IoHomeSharp id='home-icon'/>HOME</li></NavLink>
          <NavLink to={'/add/new/product'}><li><AiOutlineAppstoreAdd id='home-icon'/>ADD NEW PRODUCT</li></NavLink>
          <NavLink to={'/all/products/api/v4'} ><li><RiLayout6Fill id='home-icon'/>ALL PRODUCTS</li></NavLink>
          <NavLink to={'/promote/product/v4'}><li>PROMOTE PRODUCTS</li></NavLink>
          <NavLink to={'/orders/api/v4'}><li><FaShippingFast id='home-icon'/>ORDERS</li></NavLink>
          <NavLink to={'/completed/products/api/v4'} ><li><MdOutlineDoneAll id='home-icon'/>COMPLETED</li></NavLink>
          <NavLink to={'/api/user/all/own/orders/api/v4'}><li><PiShippingContainer id='home-icon'/>YOUR ORDERS</li></NavLink>
          <NavLink to={'/api/user/get/products/api/v4'}><li><AiFillProduct id='home-icon'/>PRODUCTS</li></NavLink>
          <NavLink to={'/confirm/order/api/v4'}><li><MdOutlineWarning id='home-icon'/> CONFIRM</li></NavLink>
          <NavLink to={'/profile'}><li><FcAbout id='home-icon'/>PROFILE</li></NavLink>
          <NavLink to={'/product/info/api/v4'}><li>PRODUCT INFO</li></NavLink>
          <NavLink to={'/api/user/cart/api/v4'}><li><FaShoppingCart id='home-icon'/>CART</li></NavLink>
          <NavLink to={'/report'}><li><MdReport id='home-icon'/>REPORT</li></NavLink>
          <NavLink to={'/setting'}><li><IoSettingsSharp id='home-icon'/>SETTING</li></NavLink>

        </ul>
      </nav>
    </>
  )
}

export default Nav
