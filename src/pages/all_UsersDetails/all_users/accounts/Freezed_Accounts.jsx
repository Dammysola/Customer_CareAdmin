import React, { useEffect, useRef, useState } from 'react'
import Style from "../All_Users.module.css"
import InputField from '../../../../components/input/InputField'
import blue from '../../../../assets/svg/blue.svg'
import gold from '../../../../assets/svg/gold.svg'
import black from '../../../../assets/svg/black.svg'
import search from '../../../../assets/svg/Search.svg'
import Header from '../../../../components/header/Header'
import Accounts_Card from './accounts_card/Accounts_Card'
import { getFreezedAccountsProvider } from '../../../api_detaills/provider/auth_provider'
import { PopupContextHook } from '../../../../PopupContext'




const Freezed_Accounts = () => {

    const { updateLoadingPopup, updateErrorText, updateErrorPopup } = PopupContextHook()

    const [toggleIndex, setToggleIndex] = useState(0)



    const transactionToggle = (index) => {

        setToggleIndex(index)

    }


    const [freezedAccounts, setFreezedAccounts] = useState({
        allUsers: [],
        subscribedUsers: [],
        unsubscribedUsers: []
    })



    useEffect(() => {

        getFreezedAccountsProvider({
            updateFreezedAccounts: (data) => {


                setFreezedAccounts({
                    allUsers: data.allUsers || [],
                    subscribedUsers: data.subscribedUsers || [],
                    unsubscribedUsers: data.unsubscribedUsers || []
                })


            },
            updateLoadingPopup,
            updateErrorText,
            updateErrorPopup
        })

    }, [])

    console.log(freezedAccounts)

    const allUsers = freezedAccounts.allUsers
    const subscribedUsers = freezedAccounts.subscribedUsers
    const unsubscribedUsers = freezedAccounts.unsubscribedUsers




    return (

        <div id={Style.All_Users_mainDiv}>
            <Header
                headerText={"Freezed Accounts"}
                headerInfo={"Here’s an information on all Freezed Accounts"} />

            <div id={Style.All_Users_wrapperDiv}>

                <div id={Style.button_Div}>
                    <button id={Style.button}>Freezed Accounts</button>
                </div>

                <div id={Style.All_Users_toggle_dateDiv}>

                    <div id={Style.All_Users_toggleDiv}>
                        <button onClick={() => transactionToggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>All</button>
                        <button onClick={() => transactionToggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Subscribed</button>
                        <button onClick={() => transactionToggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Unsubscribed</button>
                        <button onClick={() => transactionToggle(3)} className={toggleIndex == 3 ? Style.toggleDiv_buttonActive : Style.All_Users_listDiv_button}>Not-Subscribed</button>
                    </div>
                    <div id={Style.input_FilterDiv}>

                        <div id={Style.searchDiv}>

                            <img src={search} alt="" />
                            <InputField
                                placeholder={"A-Z"} />
                        </div>

                    </div>
                </div>

                <div id={Style.All_Users_Card}>

                    {
                        toggleIndex == 0 &&


                        allUsers.map((object, index) => {

                            let BG = object.status === "freezed" ? true : false
                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={object.to}
                                    status={object.status}
                                    verified={verify}
                                    BG={BG}
                                    statusColor={statusColor} />
                            )
                        })

                    }

                    {
                        
                        toggleIndex == 1 &&

                        subscribedUsers.map((object, index) => {

                            let BG = object.status === "freezed" ? true : false
                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={object.to}
                                    status={object.status}
                                    verified={verify}
                                    BG={BG}
                                    statusColor={statusColor} />
                            )
                        })
                    }


                    {

                        toggleIndex == 2 &&

                        unsubscribedUsers.map((object, index) => {

                            let BG = object.status === "freezed" ? true : false
                            let statusColor = object.status === "Online" ? true : false

                            let verify = object.subscription_type == "blue" ? blue
                                : object.subscription_type == "gold" ? gold
                                    : object.subscription_type == "black" ? black
                                        : ""

                            return (
                                <Accounts_Card
                                    key={index}
                                    img={object.profile_picture}
                                    online={object.online}
                                    name={object.username}
                                    position={object.country}
                                    to={object.to}
                                    status={object.status}
                                    verified={verify}
                                    BG={BG}
                                    statusColor={statusColor} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Freezed_Accounts