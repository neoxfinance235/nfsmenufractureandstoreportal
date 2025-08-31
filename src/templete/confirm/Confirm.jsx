import { useState, useEffect } from 'react'
import './confirm.css'
import axios from 'axios'
const Confirm = () => {
  const [conformOrdersData, setConformOrderData] = useState([''])
  const getConformData = async () => {
    try {
      const resData = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/menufracture/get/data/api/v8/${localStorage.getItem('id')}`)
      setConformOrderData(resData.data.json.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getConformData()
  }, [])
  return (
    <>
      <main className="main-div orders-main-div confirm-main-div">
        {
          conformOrdersData === null ? <><h1 className='main-div'>DATA IS LOADING</h1></> : conformOrdersData.map((orders) => {
            const cancelOrder = async () =>{
              try {
                const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/api/menufracture/cancil/order/api/v8/${localStorage.getItem('id')}?product_id=${orders._id}`)
                resData.data.json.success===false ? alert(resData.data.json.data) : window.location.reload()
              } catch (error) {
                console.log(error)
              }
            }
            const conformOrder = async () =>{
              try {
                const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/api/menufracture/conform/order/api/v8/${localStorage.getItem('id')}?product_id=${orders._id}`)
                resData.data.json.success===false ? alert(resData.data.json.data) : window.location.reload()
              } catch (error) {
                console.log(error)
              }
            }
            return (
              <>
                <div className="card" key={orders._id}>
                  <img src={orders.product_pic} alt="" />
                  <div className="product-value">
                    <div className="box">
                      <span>NAME :</span>
                      <span>{orders.product_name}</span>
                    </div>
                    <div className="box">
                      <span>PRICE :</span>
                      <span>{orders.price}</span>
                    </div>
                    <div className="box">
                      <span>PRODUCT ID :</span>
                      <span>{orders.productId}</span>
                    </div>
                    <div className="box">
                      <span>ORDER ID :</span>
                      <span>{orders.orderId}</span>
                    </div>
                    <div className="box">
                      <span>QUANTITY :</span>
                      <span>{orders.quantity}</span>
                    </div>
                    <div className="box">
                      <span>TOTAL :</span>
                      <span>{orders.total}</span>
                    </div>
                    <div className="box">
                      <span>ADDRESS :</span>
                      <span>{`${orders.to_address} ${orders.customer_pin} ${orders.customer_district} ${orders.customer_state} ${orders.customer_country}`}</span>
                    </div>
                    <div className="btn-box">
                      <button onClick={cancelOrder}>CANCEL</button>
                      <button onClick={conformOrder}>CONFORM</button>
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

export default Confirm

