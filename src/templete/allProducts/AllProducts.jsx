import React, { useEffect, useState } from 'react'
import './allProduct.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios'

const AllProducts = () => {
  const [userProductData, setUserProductData] = useState([''])
  const getUserProductData = async () => {
    try {
      const resData = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/user/get/all/product/api/v8/${localStorage.getItem('id')}`)
      if (resData.data.json.success === true) {
        setUserProductData(resData.data.json.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUserProductData()
  }, [])
  return (
    <>
      <main className="main-div all-main-div">
        {
          userProductData === null ? <><div className="card"><h1>DATA IS LOADING...</h1></div></> : userProductData.map((items) => {
            const handelDeleteProduct = async () =>{
              try {
                const deleteProduct = await axios.delete(`${process.env.REACT_APP_LOCAL_F_URL}/api/user/delete/product/user/api/v8/${localStorage.getItem('id')}?productId=${items._id}`)                
                deleteProduct.data.json.success===true ? window.location.reload() : alert(deleteProduct.data.json.data)
              } catch (error) {
                console.log(error)
              }
            }
            return (
              <>
                <div className="card" key={items._id}>
                  <img src={items.productpic} alt="" />
                  <div className="product-value">
                    <div className="box">
                      <span>NAME :</span>
                      <span>{items.name}</span>
                    </div>
                    <div className="box">
                      <span>PRODUCT ID :</span>
                      <span>{items.productId}</span>
                    </div>
                    <div className="box">
                      <span>PRICE :</span>
                      <span>{items.price}</span>
                    </div>
                    <div className="box">
                      <span>COMBO :</span>
                      <span>{items.combo}</span>
                    </div>
                    <div className="box">
                      <button onClick={handelDeleteProduct}><RiDeleteBin6Line /></button>
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

export default AllProducts

//  <div className="card">
//         <img src={''} alt="" />
//         <div className="product-value">
//           <div className="box">
//             <span>NAME :</span>
//             <span>PRODUCT NAME</span>
//           </div>
//           <div className="box">
//             <span>PRODUCT ID :</span>
//             <span>PUID</span>
//           </div>
//           <div className="box">
//             <span>PRICE :</span>
//             <span>PRICE</span>
//           </div>
//           <div className="box">
//             <span>COMBO :</span>
//             <span>COMBO</span>
//           </div>
//           <div className="box">
//             <button><RiDeleteBin6Line/></button>
//           </div>
//         </div>
//       </div>