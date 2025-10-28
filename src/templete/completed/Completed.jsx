import { useState, useEffect } from 'react'
import './completed.css'
import axiso from 'axios'
const Completed = () => {
  const [completeData, setCompleteData] = useState([''])
  const getCompleteData = async (req, res) => {
    try {
      const resData = await axiso.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/menufarcture/get/user/complete/data/api/v8/${localStorage.getItem('id')}`)
      setCompleteData(resData.data.json.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCompleteData()
  }, [])
  return (
    <main className="main-div complete-main-div">
      {
        completeData === '' ? <><div className="card"><h3>NO DATA ...</h3></div></> : completeData.map((order) => {
          return (
            <>
              <div className="card">
                <img src={order.product_pic} alt="" />
                <div className="value-box">
                  <div className="box">
                    <span>Name</span>
                    <span>{order.product_name}</span>
                  </div>
                  <div className="box">
                    <span>Quantity</span>
                    <span>{order.quantity}</span>
                  </div>
                  <div className="box">
                    <span>price</span>
                    <span>{order.price}</span>
                  </div>
                  <div className="box">
                    <span>Total</span>
                    <span>{order.total}</span>
                  </div>
                  <div className="box">
                    <span>Order ID</span>
                    <span>{order.orderId}</span>
                  </div>
                  <div className="box">
                    <span>EDT</span>
                    <span>{order.dalivary_time}</span>
                  </div>
                  <div className="box">
                    <span>Dalivery Company </span>
                    <span>{order.dalivery_compnay_name}</span>
                  </div>
                  <div className="box">
                    <span>Plartform Cgharge</span>
                    <span>{order.plartform_charge}</span>
                  </div>
                  <div className="box">
                    <span>Sub Total</span>
                    <span>{order.total-order.plartform_charge}</span>
                  </div>
                  <div className="box">
                    <span>Status : </span>
                    <span>{order.completed===false ? <><b className='c-r'>ON GOING</b></> : <b className='c-b'>COMPLETED</b>}</span>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }

    </main>
  )
}

export default Completed
