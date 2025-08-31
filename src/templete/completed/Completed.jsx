import { useState, useEffect } from 'react'
import './completed.css'
import axiso from 'axios'
const Completed = () => {
  const [completeData, setCompleteData] = useState([''])
  const getCompleteData = async (req, res) => {
    try {
      const resData = await axiso.get(`${process.env.REACT_APP_LOCAL_F_URL}/api/menufarcture/get/user/complete/data/api/v8/${localStorage.getItem('id')}`)
      setCompleteData(resData.data.json.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCompleteData()
  }, [])
  return (
    <main className="main-div complete-main-div">
      <div className="box-contrenar">
        <div className="box1 sp">
          <span>ORDER ID</span>
          <span>PRICE</span>
          <span>STATUS</span>
        </div>
        <div className="auto">
        {
          completeData === null ? <>DATA IS LOADING</> : completeData.map((items) => {
            return (
              <>
                <div className="box1">
                  <span>{items.orderId}</span>
                  <span>{items.total}</span>
                  <span>{items.Completed===true ? <>COMPLETED</> : <>PENDING</>}</span>
                </div>
              </>
            )
          })
        }
        </div>

        {/* //////////////////////////////// */}


        {/* ////////////////////////////////// */}
      </div>
    </main>
  )
}

export default Completed
