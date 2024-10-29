import React from 'react'
import Style from './MainLayout.module.css'
import Navbar from '../components/navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { PopupContextHook } from '../PopupContext'
import NewAgent_Success from '../popUps/customerCare_signUp/NewAgent_Success'
import PasswordReset_success from '../popUps/customerCare_signUp/PasswordReset_success'
import Error from '../popUps/error/Error'
import Loading from '../popUps/loading/Loading'
import Suspend_CC from '../popUps/suspend/Suspend_CC'
import Suspend_Success from '../popUps/suspend/sucess/Suspend_Success'



const MainLayout = () => {

    const location = useLocation();
    
    const showNavbar = location.pathname !== "/";

    const {signUpPopup, passwordReset, loadingPopup, errorPopup, suspendStaff, suspendStaffSuccess} = PopupContextHook()
  
  return (

    <div id={Style.wrapper}>
       
       {showNavbar && <Navbar/> }

       {signUpPopup && <NewAgent_Success/>}

        {passwordReset && <PasswordReset_success/>}

        {loadingPopup && <Loading/>}

        {errorPopup && <Error/>}

        {suspendStaff && <Suspend_CC/>}

        {suspendStaffSuccess && <Suspend_Success/>}

       <div><Outlet/></div>
    </div>
  )
}

export default MainLayout