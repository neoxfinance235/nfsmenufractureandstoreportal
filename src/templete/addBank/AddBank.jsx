import React, { useState } from 'react'
import './addBank.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
const AddBank = () => {
  const [bankDeatils , setBankDetails] = useState()
  const setData = (e) =>{
    setBankDetails(
      {
        ...bankDeatils,
        [e.target.name] : e.target.value
      }
    )
  }
  const postBankDeatils = async (e) =>{
    e.preventDefault()
    try {
      if(bankDeatils.account !== bankDeatils.accountc){
        alert('ACCOUNT AND CONFORM ACCOUNT ARE NOT SAME')
      }else{
        const resData =await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/user/add/bank/details/api/v16/${localStorage.getItem('id')}`,bankDeatils)
        resData.data.json.success===true? window.location.reload() : alert(resData.data.json.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <main className="main-div add-bank-main-div">
        <form>
            <NavLink to={'/setting'}><b>BACK</b></NavLink>            
            <p>Verify your bank deatils...</p>
            <input type="number" required onChange={setData} name='account' placeholder='ENTER YOUR ACCOUNT NUMBER' />
            <input type="number" required onChange={setData} name='accountc' placeholder='ENTER YOUR CONFORM ACCOUNT' />
            <input type="ifsc" required onChange={setData} name='ifcs' placeholder='ENTER YOUR IFCS' />
            <input type="text" required onChange={setData} name='account_name' placeholder='ACCOUNT HOLDER NAME' />
            <button onClick={postBankDeatils}>ADD</button>
        </form>
    </main>
  )
}

export default AddBank
