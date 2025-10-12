import {React , useState } from 'react'
import './login.css'
import icons from './icons.png'
import axios from 'axios'
import { Navigate, NavLink } from 'react-router-dom'
const Login = () => {
  const [loginData , setLoginData] = useState()
  const hadnelSetLoginData = (e) =>{
    setLoginData(
      {
        ...loginData,
        [e.target.name] : e.target.value
      }
    )
  }
  const handelSubmitLoginData = async (e) =>{
    e.preventDefault()
    try {
      const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/login/menufracture/data/api/v8` , loginData)
      if(resData.data.json.success===true){
        localStorage.setItem('name' , resData.data.json.data.name)
        localStorage.setItem('email' , resData.data.json.data.email)
        localStorage.setItem('profilepic' , resData.data.json.data.profilepic)
        localStorage.setItem('id' , resData.data.json.data.id)
        localStorage.setItem('phone' , resData.data.json.data.phone)
      }
      resData.data.json.success===false ? alert(resData.data.json.data) : window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="Login-div">
        <header>
          <div className="icon-value">
            <img src={icons} alt="ICON" />
            <span className='c-r'>NEOX</span>
            <span className="c-b">FINANCIAL</span>
            <span className="c-dp">SUPPORET</span>
          </div>
        </header>
        <main className="main-div">
          <form>
            <fieldset>
              <legend>LOGIN YOUR ID</legend>
              <input type="email" name='email' autoComplete='off' onChange={hadnelSetLoginData} required placeholder='ENTER YOUR EMAIL' />
              <input type="password" autoComplete='off' minLength={8} maxLength={8} name='password' onChange={hadnelSetLoginData} required placeholder='ENTER YOUR PASSWORD' />
            </fieldset>
            <div className="btn-box">
              <button type='reste'>RESET</button>
              <button onClick={handelSubmitLoginData}>LOGIN</button>
            </div>
            <span>YOU DONT HAVE ANY ACCOUNT / <NavLink to={'/singup/api/v4'}><li className='c-b'>SINGUP</li></NavLink> </span>
          </form>
        </main>
      </div>
    </>
  )
}

export default Login

