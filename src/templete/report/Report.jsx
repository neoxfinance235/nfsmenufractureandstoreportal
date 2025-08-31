import React, {useState } from 'react'
import './report.css'
import axios from 'axios'
const Report = () => {
  const [reportData , setReportData] = useState()
  const handelSendReport = async (e) =>{
    e.preventDefault()
    try {
      const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/send/report/menufracture/api/v8/${localStorage.getItem('id')}`, reportData)
      resData.data.json.success===false ? alert(resData.data.json.data) : window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <main className="main-div report-div">
        <form>
                <fieldset>
                    <legend>WRITE A REPORT</legend>
                    <textarea name="report" onChange={(e)=>{
                      setReportData(
                        {
                          ...reportData,
                          [e.target.name]:e.target.value
                        }
                      )
                    }} id='report' minLength={100}rows={15} placeholder='WRITE A REPORT' required maxLength={500}></textarea>
                    <button onClick={handelSendReport}>SEND</button>
                </fieldset>
            </form>
    </main>
    </>
  )
}

export default Report
