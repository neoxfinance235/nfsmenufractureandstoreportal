import React from 'react'
import './header.css'
import icons from './icons.png'
import { TiThMenu } from "react-icons/ti";
import SingUp from '../singup/SingUp';
import { NavLink } from 'react-router-dom'
const Headers = () => {
  const handelOpenMenu = () => {
    document.getElementById('nav').style.display = 'block'
  }
  return (
    <>
      <header>
        <div className="icon-value">
          <img src={icons} alt="ICON" />
          <span className='c-r'>NEOX</span>
          <span className="c-b">FINANCIAL</span>
          <span className="c-dp">SUPPORET</span>
        </div>
        <TiThMenu onClick={handelOpenMenu} id='open-menu' />
      </header>
    </>
  )
}

export default Headers