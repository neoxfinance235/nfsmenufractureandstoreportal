import { useState } from 'react'
import axios from 'axios'
import './addnew.css'
const Addnewe = () => {
    const [productData, setProductData] = useState('')
    const [productImageData, setProductImageData] = useState(null)
    const handelSetProductData = (e) => {
        setProductData(
            {
                ...productData,
                [e.target.name]: e.target.value

            }
        )
    }
    const handelPostProductData = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append('productsImage', productImageData)
            formData.append('name', productData.name)
            formData.append('price', productData.price)
            formData.append('breadth', productData.breadth)
            formData.append('lenght', productData.leenght)
            formData.append('weaight', productData.weaight)
            formData.append('height', productData.height)
            formData.append('combo', productData.combo)
            formData.append('des', productData.des)
            formData.append('key', `${productData.key1} , ${productData.key2} , ${productData.key4} , ${productData.key3} , ${productData.key5}`)
            formData.append('gender', productData.for)
            formData.append('type', productData.type)
            if (productImageData == null) {
                alert('PLEASE SELECT A IMAGE OF PICTURES')
            }
            if (productData.for == null) {
                alert('PLEASE SELECT A TARGETED AUDIANCE')
            }else {
                const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/user/add/product/post/product/data/v8/${localStorage.getItem("id")}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
              resData.data.json.success === true ? window.location.reload() : alert(resData.data.json.data) 
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <main className="main-div add-new">
                <form>
                    <fieldset>
                        <legend>ADD NEW PRODUCT</legend>
                        <input type="text" onChange={handelSetProductData} required autoComplete='off' name='name' placeholder='*ENTER THE PRODUCT NAME' />
                        <input type="number" onChange={handelSetProductData} required autoComplete='off' name='price' placeholder='*ENTER THE PRICE' />
                        <input type="number" onChange={handelSetProductData} required autoComplete='off' min={1} name='weaight' placeholder='* THE WEAIGHT' />
                        <input type="number" onChange={handelSetProductData} required autoComplete='off' min={1} name='height' placeholder='*ENTER THE HEIGHT' />
                        <input type="number" onChange={handelSetProductData} required autoComplete='off' min={1} name='breadth' placeholder='*ENTER THE BREADTH' />
                        <input type="number" onChange={handelSetProductData} required autoComplete='off' min={1} name='leenght' placeholder='*ENTER THE LENGHT' />
                        <input type="number" onChange={handelSetProductData} required autoComplete='off' min={1} name='combo' placeholder='*ENTER THE COMBO' />
                        <textarea name="des" onChange={handelSetProductData} required autoComplete='off' rows={10} maxLength={500} placeholder='*WRITE DESCRIPTION IN 150 CHARECTOR'></textarea>
                        <p>*Select products image</p>
                        <input type="file" accept=".jpg,.jpeg,.png,.gif" onChange={(e) => {
                            setProductImageData(e.target.files[0])

                        }} name='productsImage' required />
                        <p>*key words is help to find out needed product fo your customers</p>
                        <input type="text" onChange={handelSetProductData} required autoComplete='off' name='key1' placeholder='*ENTER THE KEYWORD 1' />
                        <input type="text" onChange={handelSetProductData} required autoComplete='off' name='key2' placeholder='*ENTER THE KEYWORD 2' />
                        <input type="text" onChange={handelSetProductData} required autoComplete='off' name='key3' placeholder='*ENTER THE KEYWORD 3' />
                        <input type="text" onChange={handelSetProductData} required autoComplete='off' name='key4' placeholder='*ENTER THE KEYWORD 4' />
                        <input type="text" onChange={handelSetProductData} required autoComplete='off' name='key5' placeholder='*ENTER THE KEYWORD 5' />
                        <div className="gender-box">
                            <p>*Please select your targeted audiance</p>
                            <div className="box">
                                <span>MENS</span>
                                <input type="radio" onChange={handelSetProductData} name='for' value={'MEN'} />
                            </div>
                            <div className="box">
                                <span>WOMEN</span>
                                <input type="radio" onChange={handelSetProductData} name='for' value={'WOMEN'} />
                            </div>
                            <div className="box">
                                <span>GIRLS</span>
                                <input type="radio" onChange={handelSetProductData} name='for' value={'GIRLS'} />
                            </div>
                            <div className="box">
                                <span>BOYS</span>
                                <input type="radio" onChange={handelSetProductData} name='for' value={'BOYS'} />
                            </div>
                            <div className="box">
                                <span>KIDS</span>
                                <input type="radio" onChange={handelSetProductData} name='for' value={"KIDS"} />
                            </div>
                            <div className="box">
                                <span>ALL</span>
                                <input type="radio" onChange={handelSetProductData} name='for' value={"ALL"} />
                            </div>
                        </div>
                        <div className="type">
                            <h4>Select product type</h4>
                            <select name="type" onChange={handelSetProductData} required>
                                <option value="">--select--</option>
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
                        </div>
                        <p>*Please read the document be carefully before submit</p>
                        <div className="btn-box">
                            <button type='reset'>RESET</button>
                            <button type='submit' onClick={handelPostProductData}>POST</button>
                        </div>
                    </fieldset>
                </form>
            </main>
        </>
    )
}
export default Addnewe