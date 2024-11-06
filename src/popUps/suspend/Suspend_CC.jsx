import React, { useEffect, useState } from 'react'
import Style from "./Suspend.module.css"
import { suspendStaffProvider } from '../../pages/api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../PopupContext'



const Suspend_CC = () => {

    const { suspendState, updateLoadingPopup, updateErrorText, updateErrorPopup, updateSuspendStaffSuccess,
        updateSuspendStaff } = PopupContextHook()

    // console.log(suspendState);



    const cancel = () => {
        updateSuspendStaff(false)
    }

    const { email, details } = suspendState


    const [{ status }] = details
    // console.log();

    console.log(email);

    const [emailState, setEmail] = useState({
        email: email
    })

    console.log(emailState);
    
    const suspension = () => {

        let body = emailState

        suspendStaffProvider(body, updateSuspendStaff, updateLoadingPopup, updateErrorText, updateErrorPopup, updateSuspendStaffSuccess)
    }

    return (
        <div id={Style.Query_mainDiv}>
            <div id={Style.Query_wrapperDiv}>
                {
                    status === "active" ?
                        <p>Suspend this account?</p> : 

                        <p>Unsuspend this Account</p>
                }
                <div id={Style.btnDiv}>
                    <button onClick={suspension}>Yes</button>
                    <button onClick={cancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Suspend_CC