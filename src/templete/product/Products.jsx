import { useState, useEffect } from 'react'
import './products.css'
import { BiSolidCartAdd } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
const Products = () => {
  const [products, setProducts] = useState([''])
  const getProductApi = async (e) => {
    try {
      const resdata = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/get/all/product/api/global/data/product/v8/${localStorage.getItem('id')}`)
      setProducts(resdata.data.json.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductApi()
  }, [])
  return (
    <>
      <main className="main-div product-main-div">
        <form className='product-search-bar'>
          <input type="text" placeholder='search products' name='product-searcher' />
          <button><FaSearch /></button>
        </form>
        <div className="product-contrenar">
          {
            products === null ? <><p>DATA IS LOADING...</p></> : products.map( (product) => {
              let cartQuantity = 1
              const buyNow = async (e) =>{
                e.preventDefault()
                try{
                  const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/api/post/order/user/api/v8/${localStorage.getItem('id')}?product=${product._id}&&quantity=${cartQuantity}`)
                  alert(resData.data.json.data)
                }catch(error){
                  console.log(error)
                }
              }
              const postAddCart = async (e) =>{
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
                  <form >
                    <div className="product-card" key={product._id}>
                      <img src={product.productpic} alt="" className='product-image' />
                      <div className="product-value">
                        <div className="value">
                          <span>PRICE :</span>
                          <span>{product.price}</span>
                        </div>
                        <div className="value">
                          <span>PRODUCT ID :</span>
                          <span> {product.productId}</span>
                        </div>
                        <div className="value">
                          <span>*Quantity:</span>
                          <input type="number" id='order-quantity' required onChange={(e) => {
                            cartQuantity = e.target.value
                          }} min={1} max={9} />
                        </div>
                        <div className="value">
                          <span>COMBO : </span>
                          <span>{product.combo}</span>
                        </div>

                      </div>
                      <div className="button-box">
                        <button onClick={postAddCart}><BiSolidCartAdd /></button>
                        <button type='submit'onClick={buyNow} >BUY NOW</button>
                      </div>
                    </div>
                  </form>
                </>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

export default Products


