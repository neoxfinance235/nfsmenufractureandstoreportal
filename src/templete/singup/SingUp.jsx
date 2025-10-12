import { useState } from 'react'
import './singup.css'
import axios from 'axios'
import { NavLink, redirect } from 'react-router-dom'
const SingUp = () => {
    const [connectorData, setConnectorData] = useState()
    const handelSetEmployeeData = (e) => {
        setConnectorData(
            {
                ...connectorData,
                [e.target.name]: e.target.value
            }
        )
    }
    const handelSubmitConnectorData = async (e) => {
        e.preventDefault()
        try {
        const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/user/singup/req/api/v8`, connectorData)
        resData.data.json.success===false ? alert(resData.data.json.data) : window.location.reload()
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <main className="main-div add-connector-div">
            <NavLink to={'*'} ><button className='back'>BACK</button></NavLink>

            <form onSubmit={handelSubmitConnectorData}>
                <fieldset>
                    <legend>CREATE NEW SELLER ACCOUNT</legend>
                    <input type="text" name='name' autoComplete='off' onChange={handelSetEmployeeData} required placeholder='*ENTER THE FULL NAME' />
                    <input type="email" name='email' autoComplete='off' onChange={handelSetEmployeeData} required placeholder='*ENTER THE EMAIL' />
                    <input type="tel" name='phone' minLength={10} maxLength={10} autoComplete='off' onChange={handelSetEmployeeData} required placeholder='*ENTER THE CONTACT ' />
                    <div className="gender">
                        <p>*Select Gender</p>
                        <div className="gender-box">
                            <div className="g">
                                <input type="radio" name='gender' onChange={handelSetEmployeeData} value={'MALE'} />
                                <span>MALE</span>
                            </div>
                            <div className="g">
                                <input type="radio" name='gender' onChange={handelSetEmployeeData} value={'FEMALE'} />
                                <span>FEMALE</span>
                            </div>
                            <div className="g">
                                <input type="radio" name='gender' onChange={handelSetEmployeeData} value={'OTHERS'} />
                                <span>OTHERS</span>
                            </div>
                        </div>
                    </div>                    
                    <p>*Please read the documents be care fully befour submit.Once you submit the form, you can't edit again. </p>
                    <div className="button-box">
                        <button type='reset'>RESET</button>
                        <button>SUBMIT</button>
                    </div>
                </fieldset>
            </form>
        </main>
    )
}

export default SingUp
