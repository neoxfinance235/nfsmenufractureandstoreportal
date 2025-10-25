import { useState, useEffect } from 'react'
import './products.css'
import { BiSolidCartAdd } from "react-icons/bi";
import axios from 'axios'
const Products = () => {
  const [products, setProducts] = useState([''])
  const [searchFilterValue, setSearchFilterValue] = useState()
  const getProductApi = async (e) => {
    try {
      const resdata = await axios.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/get/all/product/api/global/data/product/v8/${localStorage.getItem('id')}`)
      resdata.data.json.success === false ? alert(resdata.data.json.data) : setProducts(resdata.data.json.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProductApi()
  },[])
  return (
    <>
      <main className="main-div product-main-div">
        <form className='product-search-bar'>           
          <select name="type" required onChange={(e) => {
            setSearchFilterValue(e.target.value)
          }}>
            <option value="">--filter--</option>
            <option value="fshion">FASHION</option>
            <option value="foods">FOODS</option>
            <option value="drinks">DRINKS</option>
            <option value="ice cream">ICE REAMS</option>
            <option value="lassi">LASSI</option>
            <option value="grocerys">GROCERYS</option>
            <option value="rice">RICE</option>
            <option value="flower">FLOWER</option>
            <option value="sope">SOPES</option>
            <option value="shampoo">SAMPOO</option>
            <option value="heair oil">HEAIR OILS</option>
            <option value="cook oil">COOK OIL</option>
            <option value="sauces">SAUCE</option>
            <option value="spaices">SPICES</option>
            <option value="biscits">BISCITS</option>
            <option value="snacks">SNACKS</option>
            <option value="cakes">CAKES</option>
            <option value="deserts">DESERTS</option>
            <option value="chips">CHIPS</option>
            <option value="toys">TOYS</option>
            <option value="belt & wallet">BELT & WALLET</option>
            <option value="shoes">SHOES</option>
            <option value="snekars">SNEAKARS</option>
            <option value="ladys shoes">LADYS SHOES</option>
            <option value="sandels">SANDEL</option>
            <option value="heairs">HEAIRS</option>
            <option value="skin">SKIN CARE</option>
            <option value="still">STILL</option>
            <option value="beauty">BEAUTY</option>
            <option value="Kichten">KICHTEN</option>
            <option value="stetionary">STETIONARY</option>
            <option value="car decoration">CAR DECORATION</option>
            <option value="home decor">HOME DECORATION</option>
            <option value="books & note book & pens ect">BOOKS & NOTE BOOK & PEN ECT.</option>
            <option value="tshirts">TSHIRTS</option>
            <option value="shirt">SHIRTS</option>
            <option value="kurta">KURTA</option>
            <option value="suit">SUIT</option>
            <option value="pants">PANTS</option>
            <option value="saree">SAREE</option>
            <option value="blowose">BLOWOSE</option>
            <option value="naiti">NAITI</option>
            <option value="froc">FROC</option>
            <option value="lahanga">LAHANGA</option>
            <option value="kurti">KURTI</option>
            <option value="undre ware">UNDER WARE</option>
            <option value="bra">BRA</option>
            <option value="lagins">LAGINS</option>
            <option value="salwares">SALWARES</option>
            <option value="scarf">SCARF</option>
            <option value="gym suits">GYM SUITS</option>
            <option value="yoga suits">YOGA SUITS</option>
            <option value="computer component">COMPUTER COMPONENTS</option>
            <option value="cabil">CABLES</option>
            <option value="ear phones">EAR PHONES</option>
            <option value="mobile components">MOBILE COMPONETS</option>
            <option value="mobile cover">MOBILE COVERS</option>
            <option value="computer accecories">COMPUTER ACCECORIES</option>
            <option value="swicth">SWICTH</option>
            <option value="electric bord">ELECTRIC BORD</option>
            <option value="lights">LIGHTS</option>
            <option value="bulbs">BULBS</option>
            <option value="scrwes">SCRWES</option>
            <option value="nails">NAILS</option>
            <option value="nuts">NUTS</option>
            <option value="bolts">BOLTS</option>
            <option value="renchs">REANCH SET</option>
            <option value="carry bags">CARRY BAGS</option>
            <option value="leather bag">LEATHER BAGS</option>
            <option value="school bags">SCHOOL BAGS</option>
            <option value="mens bag">MENS BAGS</option>
            <option value="girls bag">GIRLS BAGS</option>
            <option value="kids bags">KIDS BAG</option>
            <option value="mat">MATS</option>
            <option value="paper plates">PAPER PLATES</option>
            <option value="cups">CUPS</option>
            <option value="hardwares">HARDWARES</option>
            <option value="ect">ECT</option>
          </select>
          <span className='c-r s-p-s' onClick={getProductApi}>Apply</span>
        </form>
        <div className="product-contrenar">
          {
            products === null ? <><p>DATA IS LOADING...</p></> : products.map((product) => {
              let cartQuantity = 1
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
                  <form >
                    <div className="product-card" key={product._id}>
                      <img src={product.productpic} alt="" className='product-image' />
                      <div className="product-value">
                        <div className="value">
                          <span>NAME : </span>
                          <span>{product.name}</span>
                        </div>
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
                        <button type='submit' onClick={buyNow} >BUY NOW</button>
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


