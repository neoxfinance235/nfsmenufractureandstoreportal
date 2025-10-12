import {useState} from 'react'
import './singup.css'
import axios from 'axios'
import {NavLink } from 'react-router-dom'
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
            if (connectorData.account !== connectorData.account2) {
                alert('ACCOUNT AND CONFORM ACCOUNT ARE NOT SAME')
            } else {
                if (connectorData.gender === "MALE" || connectorData.gender === "FEMALE" || connectorData.gender === 'OTHERS') {
                    if (connectorData.password !== connectorData.cpassword) {
                        alert("PASSWORDS ARE NOT MATCHED...")
                    }
                    const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/path/set/connector/data/api/v6/${localStorage.getItem('id')}`, connectorData)
                    resData.data.json.success === false ? alert(resData.data.json.data) : window.location.reload()
                }
                else {
                    alert('PLEASE SELECT YOUR GENDER')
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="main-div add-connector-div">
            <NavLink to={'*'} ><button className='back'>BACK</button></NavLink>
            
            <form>
                <fieldset>
                    <legend>CREATE NEW ACCOUNT</legend>
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
                    <input type="text" name='city' autoComplete='off' onChange={handelSetEmployeeData} required placeholder='*ENTER THE CITY' />
                    <input type="text" name='landmark' autoComplete='off' onChange={handelSetEmployeeData} placeholder='ENTER THE LAND MARK' required />
                    <input type="text" name='pincode' autoComplete='off' onChange={handelSetEmployeeData} required placeholder='*ENTER THE PIN CODE' />
                    <input type="text" name='country' autoComplete='off' autoCapitalize='on' onChange={handelSetEmployeeData} required placeholder='*ENTER THE COUNTRY' />
                    <input type="text" name='state' autoComplete='off' autoCapitalize='on' onChange={handelSetEmployeeData} required placeholder='*ENTER THE STATE' />
                    <input type="text" name='district' autoComplete='off' autoCapitalize='on' onChange={handelSetEmployeeData} required placeholder='*ENTER THE DISTRICT' />
                    <input type="text" name='account' autoComplete='off' onChange={handelSetEmployeeData} required placeholder='*ENTER THE ACCOUNT NO' />
                    <input type="text" name='account2' autoComplete='off' onChange={handelSetEmployeeData} required placeholder='*ENTER THE CONFORM ACCOUNT NO' />
                    <input type="text" name='ifcs' autoComplete='off' autoCapitalize='on' onChange={handelSetEmployeeData} required placeholder='*ENTER THE IFCS NO' />
                    <input type="text" name='company' autoComplete='off' autoCapitalize='on' onChange={handelSetEmployeeData} required placeholder='*ENTER THE COMPANY NAME' />
                    <input type="text" name='address' autoCapitalize='on' autoComplete='off' onChange={handelSetEmployeeData} required placeholder='ENTER THE ADDRESS SAME AS ADHAR' />
                    <p>*Password is must be 8 charctor</p>
                    <input type="password" name='password' minLength={8} maxLength={8} onChange={handelSetEmployeeData} required placeholder='*ENTER TEH PASSWORD' />
                    <input type="password" name='cpassword' minLength={8} maxLength={8} onChange={handelSetEmployeeData} required placeholder='*ENTER THE CONFORM PASSWORD' />
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
