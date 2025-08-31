import React, { useEffect, useState } from 'react'
import './profile.css'
import axios from 'axios'
const Profile = () => {
  const [profileData , setProfileData] = useState('')
  const getUserData = async () =>{
    try {
      const resData  = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/user/get/profile/data/api/v8/${localStorage.getItem('id')}`)
      resData.data.json.success === false ? alert(resData.data.json.data) : setProfileData(resData.data.json.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getUserData()
  },[])
  return (
    <>
      <main className="main-div profile-div">
        <h3>{localStorage.getItem('name')} YOUR PROFILE</h3>
        <img src={localStorage.getItem('profilepic')} alt="" />
        <table>
          <tr>
            <td>NAME : </td>
            <td>{profileData.name}</td>
          </tr>
          <tr>
            <td>EMAIL :</td>
            <td>{profileData.email}</td>
          </tr>
          <tr>
            <td>PHONE :</td>
            <td>{profileData.phone}</td>
          </tr>
          <tr>
            <td>RM :</td>
            <td>{profileData.rm}</td>
          </tr>
          <tr>
            <td>OFFICE ADDRESS</td>
            <td>SONDALIA SONDALIA SHASAN 743423 NORTH 24 PARGANAS WEST BENGAL INDIA</td>
          </tr>
        </table>
      </main>
    </>
  )
}

export default Profile
