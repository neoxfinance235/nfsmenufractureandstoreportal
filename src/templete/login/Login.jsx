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
            <p></p>
            <h2>Create Your Seller Account Today!</h2>
            <h3>🌟 Mission & Purpose</h3>
            <p><span className='c-r'><b>Neox</b></span><span className="c-b"><b> Financial </b></span><span className="c-dp"><b>Supporet</b></span> aims to empower unemployed individuals by offering tools for financial literacy, digital skills, freelancing, and online earning. The goal is to break the cycle of financial insecurity and build confidence, independence, and long-term growth.</p>
            <p>They want to become a trusted financial support system for individuals, families, and businesses—making money management simple and stress-free.</p>
            <h3>💡 Services & Values</h3>
            <li>Empower people to budget, save, and invest wisely</li>
            <li>Support startups and businesses with billing, payments, and planning</li>
            <li>Build trust through transparency and customer-first support</li>
            <li>Promote growth by preparing users for future opportunities</li>
            <p>It’s positioned as more than just a financial platform—it’s a movement to uplift lives and redefine financial freedom.</p>
            <p></p>
            <p>Sign up now to access exclusive information and activate your account. Start selling and grow your business with us!</p>
            <h2>Become a <span><b className="c-r">N</b></span> <span><b className="c-b">F</b></span> <span><b className="c-dp">S</b></span>  Seller Today!</h2>
            <p>Sign up now to activate your seller account and unlock powerful tools for freelancing, financial growth, and digital success.</p>
            <span>YOU DONT HAVE ANY ACCOUNT / <NavLink to={'/singup/api/v4'}><li className='c-b'>SINGUP</li></NavLink> </span>
          </form>
        </main>
      </div>
    </>
  )
}

export default Login

