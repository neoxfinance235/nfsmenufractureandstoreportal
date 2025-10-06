import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'

const Home = () => {
  const [dashbordData , setDashbordData] = useState('')
  const getUserDashbordData = async () =>{
    try {
      const resData = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/data/user/dashbord/data/api/v8/${localStorage.getItem('id')}`)
      setDashbordData(resData.data.json.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    setTimeout(()=>{
      getUserDashbordData()
    },1000)
  },[])
  return (
    <main className="main-div home-main-div">
      <h3>HELLO ! {localStorage.getItem('name')} IT'S YOUR DASHBORD</h3>
      <div className="home-contrenar">
        <div className="card-box">
          <div className="card">
            <h4>PROMOTES</h4>
            <p>{dashbordData.promotes}</p>
          </div>
          <div className="card">
            <h4>TOTAL SALES</h4>
            <p>{dashbordData.totalSales}</p>
          </div>
        </div>
        <div className="card-box">
          <div className="card">
            <h4>COMPLETED</h4>
            <p>{dashbordData.completed}</p>
          </div>
          <div className="card">
            <h4>PRODUCT</h4>
            <p>{dashbordData.products}</p>
          </div>
        </div>
        <div className="card-box">
          <div className="card">
            <h4>THIS MONTH</h4>
            <p>{dashbordData.thisMonth}</p>
          </div>
          <div className="card">
            <h4>ALL ORDERS</h4>
            <p>{dashbordData.allOrders}</p>
          </div>
        </div>
        <div className="card-box">
          <div className="card">
            <h4>REJECTED</h4>
            <p>{dashbordData.rejected}</p>
          </div>
          <div className="card">
            <h4>NEW ORDER</h4>
            <p>{dashbordData.neworder}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
