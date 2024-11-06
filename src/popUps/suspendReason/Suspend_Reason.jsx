import React, { useState } from 'react'
import Style from './Suspend_Reason.module.css'
import Button from '../../components/button/Button'
import { suspendUserProvider } from '../../pages/api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../PopupContext'
// import { postSuspendProvider } from '../../pages/admin/api_detaills/provider/auth_provider'





const Suspend_Reason = () => {

    const { phoneState, updateLoadingPopup, updateErrorText, updateErrorPopup,
        updateSuspendUserPopup, updateSuspendUserSuccess } = PopupContextHook()

    const {phone, details} = phoneState

    // console.log(phone);
    

    const [suspend, setSuspend] = useState({
        phone: phone,
        reason: ""
    })
     const [status] = details
// console.log(suspend);
console.log(status);

    const Details = (e) => {

        const name = e.target.name
        const value = e.target.value

        setSuspend(
            (prev) => ({
                ...prev,
                [name]: value
            })
        )
    }

    const suspendFunc = async (e) => {

        e.preventDefault()
        //The request Body

        let body = suspend;

        //This initiates the provider that handles the suspend User API.
        suspendUserProvider(body, updateLoadingPopup, updateSuspendUserSuccess, updateSuspendUserPopup, updateErrorPopup, updateErrorText);

    }

    return (

        <div id={Style.suspend_reason_mainDiv}>

{
                status === "active" ?

                    <div id={Style.suspend_reason_container}>

                        <div id={Style.reasonText}>Reason for Action</div>

                        <form action="" onSubmit={suspendFunc}>

                            <div id={Style.textareaDiv}>

                                <textarea name="reason" id={Style.textarea}
                                    placeholder=" Type your Reason"
                                    value={suspend.reason} onChange={Details}></textarea>
                                <label htmlFor="" id={Style.label}>Reason</label>

                            </div>

                            <Button text={"Suspend Account"} type={"submit"} />
                        </form>

                    </div> :

                    <div id={Style.Query_wrapperDiv}>
                        <p>Unsuspend this account?</p>
                        <div id={Style.btnDiv}>
                            <button type='submit' onClick={suspendFunc}>Yes</button>
                            <button onClick={()=>updateSuspendUserPopup(false)}>Cancel</button>
                        </div>
                    </div>

            }
        </div >
    )
}

export default Suspend_Reason