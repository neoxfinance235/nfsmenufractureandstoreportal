import { useEffect, useState } from 'react'
import axios from 'axios'
import './setting.css'
const Setting = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [password, setPassword] = useState()
  const [locationAuth, setLocationAuth] = useState()
  const [locationData, setLocationData] = useState()
  const profilPicFormData = new FormData()
  profilPicFormData.append('profilepic', profilePic)
  const handelProfilePicData = async (e) => {
    e.preventDefault()
    try {
      const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/pic/set/user/profile/pic/api/v4/${localStorage.getItem('id')}`, profilPicFormData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      console.log(resData.data)
      if (resData.data.json.success === true) {
        localStorage.removeItem('profilepic')
        localStorage.setItem('profilepic', resData.data.json.data)
        window.location.reload()
      }
      else {
        alert(resData.data.json.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handelChangePasswordData = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value
    })
  }
  const handelSubmitChangePasswordData = async (e) => {
    e.preventDefault()
    try {
      if (password.oldpass !== password.newpass) {
        const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/member/change/profile/pis/api/v4/app/${localStorage.getItem('id')}`, password)
        if (resData.data.json.data === "DATA NOT FOUND") {
          localStorage.clear()
          window.location.reload()
        }
        else {
          alert(resData.data.json.data)
        }
      }
      else {
        alert('PASSWORDS ARE SAME')
      }
    } catch (error) {
      console.log(error)
      alert('PASSWORD IS INVALID')
    }
  }
  const handelauthLocation = async () => {
    try {
      const resData = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/apip/user/location/auth/varyfy/${localStorage.getItem('id')}`)
      if (resData.data.json.success === true) {
        setLocationAuth(resData.data.json.success)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const setLocationD = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setLocationData(
              {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
              }
            )
          }
        )
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const handelSetLocation = async (e) => {
    try {
      e.preventDefault()
      setLocationD()
      const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/apip/user/location/set/varyfy/${localStorage.getItem('id')}`, locationData)
      if (resData.data.json.success === true) {
        setLocationAuth(resData.data.json.success)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const handelLogout = () => {
    localStorage.clear()
  }
  useEffect(() => {
    handelauthLocation()
  }, [])
  return (
    <main className="main-div setting-div">
      <div className="setting-card">
        <h3>Change Profile Pic</h3>
        <form onSubmit={handelProfilePicData}>
          <input type="file" accept='.jpg,.jpeg,.png,.gif' name='profilepic' required onChange={(e) => {
            setProfilePic(e.target.files[0])
          }} />
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
      <div className="setting-card">
        <h3>Change Password</h3>
        <form onSubmit={handelSubmitChangePasswordData}>
          <fieldset className='change-password'>
            <legend>change password</legend>
            <input type="password" name='oldpass' onChange={handelChangePasswordData} minLength={8} maxLength={8} placeholder='ENTER YOUR OLD PASSWORD' /> <br />
            <input type="password" name='newpass' onChange={handelChangePasswordData} minLength={8} maxLength={8} placeholder='ENTER YOUR NEW PASSWORD' />
            <button type='submit'>SUBMIT</button>
          </fieldset>
        </form>
      </div>
      <div className="setting-card">
        <h3>AUTH LOCATION</h3>
        <form>
          <fieldset>
            <button onClick={handelSetLocation}>AUTH LOCTION</button>
          </fieldset>
        </form>
      </div>
      <div className="setting-card">
        <h3 className='c-r'>LOGOUT</h3>
        <form>
          <fieldset>
            <button onClick={handelLogout}>LOGOUT</button>
          </fieldset>
        </form>
      </div>
    </main>
  )
}
export default Setting

