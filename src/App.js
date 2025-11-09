import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './templete/home/Home'
import Headers from './templete/headers/Headers'
import Nav from './templete/headers/Nav'
import AllProducts from './templete/allProducts/AllProducts'
import Promote from './templete/promote/Promote'
import Orders from './templete/orders/Orders'
import Completed from './templete/completed/Completed'
import Confirm from './templete/confirm/Confirm'
import Profile from './templete/profile/Profile'
import Report from './templete/report/Report'
import Setting from './templete/setting/Setting'
import Login from './templete/login/Login'
import Addnewe from './templete/addNew/Addnewe'
import YourOrders from './templete/yourOrders/YourOrders'
import Products from './templete/product/Products'
import Cart from './templete/cart/Cart'
import axios from 'axios'
import { useEffect } from 'react'
import SingUp from './templete/singup/SingUp'
import ProductInfo from './templete/productInfo/ProductInfo'

const App = () => {
  const hadnelAuth = async () => {
    try {
      const resData = await axios.patch(`${process.env.REACT_APP_LOCAL_F_URL}/api/take/auth/menufarcture/${localStorage.getItem('id')}`)
      if (resData.data.json.data === "DATA NOT FOUND") {
        localStorage.clear()
      }
      if(resData.data.json.data==="ID IS BLOCKED !"){
        alert(resData.data.json.data)
        localStorage.clear()
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    hadnelAuth()
  }, [])
  const routes = createBrowserRouter(
    [
      {
        path:"*",
        element: <><Headers /><Nav /><Home /></>
      },
      {
        path: "/",
        element: <><Headers /><Nav /><Home /></>
      },
      {
        path: '/add/new/product',
        element: <><Headers /><Nav /><Addnewe/></>
      },
      {
        path: '/all/products/api/v4',
        element: <><Headers /><Nav /><AllProducts /></>
      },
      {
        path: '/promote/product/v4',
        element: <><Headers /><Nav /><Promote /></>
      },
      {
        path: '/orders/api/v4',
        element: <><Headers /><Nav /><Orders /></>
      },
      {
        path: '/completed/products/api/v4',
        element: <><Headers /><Nav /><Completed /></>
      },
      {
        path: '/confirm/order/api/v4',
        element: <><Headers /><Nav /><Confirm /></>
      },
      {
        path: '/profile',
        element: <><Headers /><Nav /><Profile /></>
      },
      {
        path: '/report',
        element: <><Headers /><Nav /><Report /></>
      },
      {
        path: "/setting",
        element: <><Headers /><Nav /><Setting /></>
      },
      {
        path:'/api/user/get/products/api/v4',
        element:<><Headers/><Nav/><Products/></>
      },
      {
        path:"/api/user/all/own/orders/api/v4",
        element:<><Headers/><Nav/><YourOrders/></>
      },
      {
        path:'/api/user/cart/api/v4',
        element:<><Headers/><Nav/><Cart/></>
      },
      {
        path:'/product/info/api/v4',
        element:<><Headers/><Nav/><ProductInfo/></>
      }
    ]
  )
  const LoginRoutes = createBrowserRouter(
    [
      {
        path:"*",
        element:<Login/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path : '/singup/api/v4',
        element : <><SingUp/></>    
      }
    ]
  )
  return (
    <RouterProvider router={localStorage.getItem('id')===null ? LoginRoutes : routes} />
  )
}

export default App

