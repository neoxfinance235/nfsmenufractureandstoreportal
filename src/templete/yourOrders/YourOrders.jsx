import React, { useEffect, useState } from 'react'
import './yourOrders.css'
import axios from 'axios'
const YourOrders = () => {
  const [orderData, setOrdersData] = useState([])
  const getUserAllOrders = async () => {
    try {
      const resData = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/gets/all/users/orders/data/api/v8/${localStorage.getItem('id')}`)
      resData.data.json.success === false ? alert(resData.data.json.data) : setOrdersData(resData.data.json.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUserAllOrders()
  }, [])
  return (
    <>
      <main className="main-div  your-orders orders-main-div">
        {
          orderData === null ? <>NO DATA</> : orderData.map((order) => {
            return (
              <>
                <div className="card" key={order._id}>
                  <img src={order.product_pic} alt="" />
                  <div className="product-value">
                    <div className="box">
                      <span>NAME </span>
                      <span>{order.product_name}</span>
                    </div>
                    <div className="box">
                      <span>PRICE </span>
                      <span>{order.price} INR</span>
                    </div>
                    <div className="box">
                      <span>PRODUCT ID </span>
                      <span>{order.productId}</span>
                    </div>
                    <div className="box">
                      <span>ORDER ID </span>
                      <span>{order.orderId}</span>
                    </div>
                    <div className="box">
                      <span>QUANTITY </span>
                      <span>{order.quantity}</span>
                    </div>
                    <div className="box">
                      <span>TOTAL </span>
                      <span>{order.total}</span>
                    </div>
                    <div className="box">
                      <span>COMBO  </span>
                      <span>{order.combo}</span>
                    </div>
                    <div className="box">
                      <span>SKU  </span>
                      <span>{order.sku}</span>
                    </div>
                    <div className="box">
                      <span>PAYMENT  </span>
                      <span>CASH ON DALIVARY</span>
                    </div>
                    <div className="box">
                      <span>STATUS</span>
                      <span>NOT CONFOREMD</span>
                    </div>
                    <div className="box1">
                      {
                        order.dispatch === false ? <button >CANCEL</button> : <></>
                      }
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </main>
    </>
  )
}
export default YourOrders
