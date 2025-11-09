import React, { useState } from 'react'
import './productInfo.css'
import { BiSolidCartAdd } from "react-icons/bi";
import axios from 'axios';
const ProductInfo = () => {
    const [product, setProductData] = useState(null)
    const [product_id, setProductId] = useState(null)
    let cartQuantity = 1
    /////////////BUY SECTION///////////
    const getProductData = async (e) => {
        e.preventDefault()
        try {
            const resData = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/get/user/product/info/api/v8/${localStorage.getItem('id')}?product_id=${product_id}`)
            resData.data.json.success === false ? alert(resData.data.json.data) : setProductData(resData.data.json.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    const buyNow = async (e) => {
        e.preventDefault()
        try {
            const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/api/post/order/user/api/v8/${localStorage.getItem('id')}?product=${product._id}&&quantity=${cartQuantity}`)
            alert(resData.data.json.data)
        } catch (error) {
            console.log(error)
        }
    }
    const postAddCart = async (e) => {
        e.preventDefault()
        try {
            const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/api/send/add/cart/post/user/api/${localStorage.getItem('id')}?product_id=${product._id}`)
            alert(resData.data.json.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <main className="main-div product-info-main-div">
                <form>
                    <input type="text" autoComplete='off' name='search' onChange={(e) => {
                        setProductId(e.target.value)
                    }} placeholder='PRODUCT ID' minLength={11} maxLength={11} />
                    <button onClick={getProductData}>SEARCH</button>
                </form>
               { product === null ? <></> : <> <div className="product-value">
                    <img src={product.product_pic} alt="" />
                    <div className="product-details">
                        <div className="box">
                            <span>Name </span>
                            <span>{product.product_name}</span>
                        </div>
                        <div className="box">
                            <span>Price </span>
                            <span>{product.product_price} INR</span>
                        </div>
                        <div className="box">
                            <span>Combo </span>
                            <span>{product.combo} X</span>
                        </div>
                        <div className="box">
                            <span>Weaight </span>
                            <span>{product.weight} KG</span>
                        </div>
                        <h3>Description...</h3>
                        <p>{product.des}</p>
                    </div>
                </div>
                <div className="company-details">
                    <h3>Company Details</h3>
                    <div className="box">
                        <span>Company name </span>
                        <span>{product.company_name}</span>
                    </div>
                    <div className="box">
                        <span>Name</span>
                        <span>{product.company}</span>

                    </div>
                    <div className="box">
                        <span>Company Address</span>
                        <span>{product.company_address}</span>
                    </div>
                    <div className="box1">
                        <button onClick={postAddCart}><BiSolidCartAdd /></button>
                        <button onClick={buyNow}>BUY NOW</button>
                    </div>
                </div></>}
            </main>
        </>
    )
}

export default ProductInfo
