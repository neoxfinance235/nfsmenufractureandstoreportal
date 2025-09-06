import React, { useEffect, useState } from 'react'
import './cart.css'
import axios from 'axios'
const Cart = () => {
  const [cartdata, setCartData] = useState([''])
  let total = 0
  const getUserAllCartItems = async () => {
    try {
      const getUserAllData = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/get/user/all/cart/items/${localStorage.getItem('id')}`)
      setCartData(getUserAllData.data.json.data)
      getUserAllData.data.json.data.map((item) => {
        return (
          total + item.price
        )
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUserAllCartItems()
  }, [])
  return (
    <>
      <main className="main-div cart-main-div">
        {
          cartdata === null ? "DATA IS LOADING" : cartdata.map((item) => {
            let cartQuantity = 1
            const buyNow = async (e) => {
              e.preventDefault()
              try {
                const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/api/post/order/user/api/v8/${localStorage.getItem('id')}?product=${item._id}&&quantity=${cartQuantity}`)
                alert(resData.data.json.data)
              } catch (error) {
                console.log(error)
              }
            }
            const removeNow = async (e) => {
              e.preventDefault()
              try {
                const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/api/remove/cart/item/user/api/v8/${localStorage.getItem('id')}?product=${item._id}`)
                resData.data.json.success===true ? window.location.reload() : alert(resData.data.json.data)
              } catch (error) {
                console.log(error)
              }
            }
            return (
              <>
                <div className="cart-card" key={item._id}>
                  <img src={item.productpic} alt="" />
                  <div className="cart-value">
                    <div className="box">
                      <span>Name : {item.name}</span>
                      <span>Price : {item.price}</span>
                      <span>combo : {item.combo}</span>
                      <span> Product ID : {item.productId}</span>
                      <span> Type : {item.type}</span>
                      <span>Weaight : {item.weaight}</span>
                      <span>QUANTITY : <input type="number" max={9} min={1} required onChange={(e) => {
                        cartQuantity = e.target.value
                      }} /></span>
                      <button onClick={buyNow}>BUY</button>
                      <button onClick={removeNow}>REMOVE</button>
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

export default Cart
