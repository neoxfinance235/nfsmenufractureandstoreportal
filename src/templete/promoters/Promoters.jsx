import React, { useEffect, useState } from 'react'
import './promoters.css'
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import axios from 'axios'
const Promoters = () => {
    const [promoteData, setPromoteData] = useState([''])
    const getPromoteData = async () => {
        try {
            const resData = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/get/api/all/promote/ads/v8/${localStorage.getItem('id')}`)
            resData.data.json.success === true ? setPromoteData(resData.data.json.data) : <></>
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getPromoteData()
    }, [])
    return (
        <main className="main-div social-add-promote">
            {
                promoteData === null ? <><h2>NO DATA</h2></> : promoteData.map((items) => {
                    const like = async () => {
                        try {
                            const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/promotes/likes/api/user/api/v8/${localStorage.getItem('id')}?puid=${items.PUID}`)
                            resData.data.json.success === true ? window.location.reload() : <></>
                        } catch (error) {
                            console.log(error.message)
                        }
                    }
                    const dislike = async () => {
                        try {
                            const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/promotes/dislikes/api/user/api/v8/${localStorage.getItem('id')}?puid=${items.PUID}`)
                            resData.data.json.success === true ? window.location.reload() : <></>
                        } catch (error) {
                            console.log(error.message)
                        }
                    }
                    return (
                        <>
                            <div className="card" key={items._id}>
                                <div className="company-header">
                                    <img src={items.logo} alt="" />
                                    <span>{items.company_name}</span>
                                </div>
                                <div className="product-details">
                                    <img src={items.product_pic} alt="" />
                                    <div className="product-detailss">
                                        <div className="box">
                                            <span>Name </span>
                                            <span>{items.product_name}</span>
                                        </div>
                                        <div className="box">
                                            <span>Price </span>
                                            <span> {items.product_price}</span>
                                        </div>
                                        <div className="box">
                                            <span>Product ID</span>
                                            <span> {items.PUID}</span>
                                        </div>
                                        <div className="box">
                                            <span>Combo </span>
                                            <span> {items.combo}</span>
                                        </div>
                                        <div className="box1">
                                            <div className="box2" onClick={like}>
                                                <FcLike />
                                                <span> {items.like}</span>
                                            </div>
                                            <div className="box2" onClick={dislike}>
                                                <FcDislike />
                                                <span> {items.dislike}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </>
                    )
                })
            }

        </main>
    )
}

export default Promoters
