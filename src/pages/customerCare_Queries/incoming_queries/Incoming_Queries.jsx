import React from 'react'
import Style from '../incoming_queries/Incoming_Queries.module.css'
import search from '../../../../../assets/svg/Search.svg'
import microphone from '../../../../../assets/svg/microphone.svg'
import capture from '../../../../../assets/svg/capture.svg'
import recording from '../../../../../assets/svg/recording.svg'
import filter from '../../../../../assets/svg/Complete_filter_img.svg'
import InputField from '../../../../../components/input/InputField'
import Header from '../../../../../components/header/Header'
import { Link } from 'react-router-dom'
import avatar from '../../../../../assets/images/avatar.png'

const Incoming_Queries = () => {

    const arr = [



        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            names: {
                img: avatar,
                name: "Lighty",
            },
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            action: "Review"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "Payment",
            names: {
                img: avatar,
                name: "Lighty",
            },
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            action: "Review"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "Payment",
            names: {
                img: avatar,
                name: "Lighty",
            },
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            action: "Review"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            names: {
                img: avatar,
                name: "Lighty",
            },
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            action: "Review"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            names: {
                img: avatar,
                name: "Lighty",
            },
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            action: "Review"
        },
        {
            date: "8/7/2024",
            ticketID: "WH457IP",
            category: "User Dispute",
            names: {
                img: avatar,
                name: "Lighty",
            },
            queryType: "In-app Message",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            status: "Pending",
            action: "Review"
        },

    ]
    
    return (
        <div id={Style.Incoming_Queries_mainDiv}>
            <Header
                headerText={"Incoming Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Incoming_Queries_wrapperDiv}>

                <div id={Style.Query_incomingTextDiv}>
                    <p>Incoming</p>

                    <div id={Style.search_filterDiv}>
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"Search ticket no"} />
                        </div>
                        <img id={Style.filterImg} src={filter} alt="" />
                    </div>
                </div>

                <div id={Style.Incoming_Queries_tableWrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Date</th>
                            <th>TicketID</th>
                            <th>Category</th>
                            <th>Username</th>
                            <th>QueryType</th>
                            <th>Query</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                            {
                                arr.map((obj, index) => {

                                    return (
                                        <tr id={Style.Personal_Info_tr}>
                                            <td>{index + 1}</td>
                                            <td>{obj.date}</td>
                                            <td className={Style.tableText}>{obj.ticketID}</td>
                                            <td className={Style.tableText}>{obj.category}</td>
                                            <td ><div id={Style.usernameText}><img src={obj.names.img} alt="" />{obj.names.name}</div></td>
                                            <td className={Style.tableText}>{obj.queryType}</td>
                                            <td>
                                                {/* <div }> */}
                                                    <p className={Style.ReportText}>{obj.query}</p>
                                                {/* </div> */}
                                            </td>
                                            <td><div id={Style.statusText}>{obj.status}</div></td>
                                            <td><
                                                Link to={"/QueryReview"}><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>{obj.action}</button></Link></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Incoming_Queries