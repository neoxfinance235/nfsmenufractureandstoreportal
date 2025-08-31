import React, { useState } from 'react'
import './promote.css'
import axios from 'axios'
const Promote = () => {
  const [promoteData, setPromoteData] = useState()
  const postPromoteData = async (e) => {
    e.preventDefault()
    try {
      if (promoteData === null) {
        alert('GIVE YOUR PRODUCT ID')
      } else {
        const resData = await axios.post(`${process.env.REACT_APP_LOCAL_F_URL}/api/send/promote/data/api/v8/${localStorage.getItem('id')}`, promoteData)
        resData.data.json.success === true ? alert(resData.data.json.data)  :window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <main className="main-div promotes-main-div">
        <form onSubmit={postPromoteData}>
          <fieldset>
            <legend>PROMOTEING</legend>
            <p>Promoting a product successfully is about creating awareness, building trust, and inspiring action. To stand out in today’s competitive market, it’s important to highlight the unique value your product brings. Start by identifying your target audience and understanding their needs, then position your product as the perfect solution. Use engaging content across multiple channels—social media, email campaigns, and websites—to showcase benefits, features, and real customer experiences. Attractive visuals, clear messaging, and compelling calls to action can drive interest and encourage conversions. Offering limited-time discounts, free trials, or bundled deals can also increase urgency and boost sales. Partnering with influencers or leveraging testimonials helps build credibility and reach wider audiences. Consistency in branding and communication ensures your product leaves a lasting impression. Remember, promotion is not just about selling—it’s about creating a meaningful connection with customers that turns one-time buyers into loyal brand advocates.</p>
            <input type="text" name='id' autoComplete='off' onChange={(e) => {
              setPromoteData(
                {
                  [e.target.name]: e.target.value
                }
              )
            }} minLength={9} maxLength={9} required placeholder='GIVE YOUR 9 DIGIT PRODUCT ID' />
            <button type='submit' >PROMOTE</button>
          </fieldset>
        </form>
      </main>
    </>
  )
}

export default Promote