import React from 'react'
import './yourOrders.css'
const YourOrders = () => {
  return (
    <>
      <main className="main-div  your-orders orders-main-div">
        <div className="card" key={'orders._id'}>
          <img src={''} alt="" />
          <div className="product-value">
            <div className="box">
              <span>NAME :</span>
              {/* <span>{orders.product_name}</span> */}
            </div>
            <div className="box">
              <span>PRICE :</span>
              {/* <span>{orders.price}s</span> */}
            </div>
            <div className="box">
              <span>PRODUCT ID :</span>
              {/* <span>{orders.productId}</span> */}
            </div>
            <div className="box">
              <span>ORDER ID :</span>
              {/* <span>{orders.orderId}</span> */}
            </div>
            <div className="box">
              <span>QUANTITY :</span>
              {/* <span>{orders.quantity}</span> */}
            </div>
            <div className="box">
              <span>TOTAL :</span>
              {/* <span>{orders.total}</span> */}
            </div>
            <div className="box">
              <span>ADDRESS </span>
              {/* <span>{`${orders.to_address} ${orders.customer_pin} ${orders.customer_district} ${orders.customer_state} ${orders.customer_country}`}</span> */}
            </div>
            <div className="box1">
              <button >CANCEL</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default YourOrders
