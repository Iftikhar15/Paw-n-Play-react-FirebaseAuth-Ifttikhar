import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Whyus from './Components/Whyus/Whyus.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Category from './Components/Category/Category.jsx';
import Packages from './Components/Packages/Packages.jsx';
import SubsBox from './Pages/SubsBox.jsx';
import Error from './Components/ErrorPage/Error.jsx';
import SubsDrtails from './Components/SubsDetails/SubsDetails.jsx';
import SubsDetails from './Components/SubsDetails/SubsDetails.jsx';
import Profile from './Pages/Profile.jsx';
import ForgotPassword from './Components/ForgetPassword/forgetpassword.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "category",
        Component: Category
      },
      {
        path: "packages",
        Component: Packages
      },
      {
        path: "why-us",
        Component: Whyus
      },
      {
        path: "subscription-packages",
        element: <SubsBox />,
      
      },
      {
        path: "profile",
        Component: Profile
      },
      {
        path: "forget-password",
        Component: ForgotPassword
      },
      {
        path: '*',
        element: <Error/>
      },
      {
      
        path: "packages/:id",
        Component: SubsDetails,
        loader: () => fetch('../public/faqs.JSON'),
      }
      

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
