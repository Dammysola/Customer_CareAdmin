import React, { useState } from 'react'
import Style from '../customerCare_Queries/CustomerCare_Queries.module.css'
import Header from '../../../../components/header/Header'
import users from '../../../../assets/svg/total_users.svg'
import issues from '../../../../assets/svg/Issues.svg'
import Total_Card from '../../../../components/total_Card/Total_Card'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import avatar from '../../../../assets/images/verified_avatar.png'
import arrow_down from '../../../../assets/svg/arrow_down.svg'
import amazing from '../../../../assets/svg/amazing.svg'
import good from '../../../../assets/svg/good.svg'
import sad from '../../../../assets/svg/sad.svg'
import neutral from '../../../../assets/svg/neutral.svg'
import Button from '../../../../components/button/Button'
import Progress_Bar from '../../../../components/progress_bar/Progress_Bar'




const CustomerCare_Queries = () => {


    let [toggleIndex, setToggleIndex] = useState(100);

    // Get the current month name
    const getCurrentMonth = () => {

        const currentMonthIndex = new Date().getMonth(); // Returns month index (0-11)
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        return months[currentMonthIndex];
    };


    const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
    // const [monthsIndex, setMonthsIndex] = useState(true);
    const [ShowMonths, setShowMonths] = useState(true);



    const handleMonthSelect = (month) => {

        setSelectedMonth(month);
        setShowMonths(false)

        console.log("Selected Month: ", month); // Optional, logs the selected month
    };

    const toggle = () => {
        setShowMonths((prev) => !prev)
    }



    const stats_card7 = [
        {
            image1: users,
            price: "23,000",
            text: "App Message Queries",
            to: "/message_queries",
            divText: "View All"
        },
        {
            image1: issues,
            price: "20K",
            text: "Mail Queries",
            to: "/mailQueries",
            divText: "View All"
        },
        {
            image1: users,
            price: "345,000",
            text: "In- App Call Queries",
            to: "/callQueries",
            divText: "View All"
        },
        {
            image1: issues,
            price: "23,000",
            text: "Toll Calls Queries",
            to: "",
            divText: "View All"
        },
    ]

    const ticket_arr = [
        {
            image1: users,
            price: "23,000",
            text: "Resolved Queries",
            to: "/resolvedQueries",
            divText: "View All"
        },
        {
            image1: issues,
            price: "20K",
            text: "Closed Queries",
            to: "/closedQueries",
            divText: "View All"
        },
        {
            image1: issues,
            price: "345,000",
            text: "Escalated Queries",
            to: "/escalatedQueries",
            divText: "View All"
        },
    ]


    const progressDiv = [

        {
            text: "Average First Contact Resolution Rate",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Customer Satisfaction Rate",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Resolution Time",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        },
        {
            text: "Average Response Time",
            percent: "70%",
            infoText: "70% more earning than last month, keep watching to find out more"
        }
    ]


    return (
        <div id={Style.Queries_mainDiv}>
            <Header
                headerText={"Incoming Queries"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Queries_wrapperDiv}>
                <p id={Style.Queries_headerText}>Queries</p>

                <div id={Style.Queries_mapDiv}>
                    {
                        stats_card7.map((obj, index) => {

                            return (
                                <Total_Card
                                    Key={index}
                                    image1={obj.image1}
                                    price={obj.price}
                                    text={obj.text}
                                    to={obj.to}
                                    divText={obj.divText}
                                />

                            )
                        })
                    }
                </div>

                <div id={Style.ticket_mapDiv}>
                    {
                        ticket_arr.map((obj, index) => {

                            return (
                                <Total_Card
                                    Key={index}
                                    image1={obj.image1}
                                    price={obj.price}
                                    text={obj.text}
                                    to={obj.to}
                                    divText={obj.divText}
                                />

                            )
                        })
                    }
                </div>


                <div id={Style.Performance_CardDiv}>

                    {
                        progressDiv.map((obj) => {
                            return (
                                <Progress_Bar
                                    text={obj.text}
                                    infoText={obj.infoText}
                                    percent={obj.percent} />
                            )
                        })
                    }

                </div>



                <div id={Style.Query_satisfaction_wrapperDiv}>
                    <div className={Style.Ticket_entireDiv}>
                        <div id={Style.AssignedTicket_textDiv}>
                            <p>Recent Assigned Tickets</p>
                            <p>View All</p>
                        </div>

                        <div id={Style.Dashboard_TicketWrapperDiv}>
                            <div id={Style.Ticket_HeaderDiv}>
                                <div id={Style.ticketButtonDiv}>
                                    <button className={Style.ticketButton}>All</button>
                                </div>
                                <div id={Style.searchDiv}>
                                    <img src={search} alt="" />
                                    <InputField
                                        placeholder={"Search ticket no"} />
                                </div>
                            </div>

                            <div id={Style.ticketTable_wrapperDiv}>
                                <table>
                                    <tr id={Style.headerTable}>
                                        <th>User</th>
                                        <th>Ticket No</th>
                                        <th>QueryType</th>
                                        <th>Date/Time</th>
                                    </tr>

                                    <tbody>
                                        <tr>
                                            <td style={{ display: "flex", columnGap: "0.5rem", alignItems: "center" }}><img src={avatar} alt="" />
                                                <div><p className={Style.Ticket_tableData}>John Doe</p>
                                                    <p id={Style.disputeText}>User Dispute</p></div>
                                            </td>
                                            <td className={Style.Ticket_tableData}>GHNJ657RY</td>
                                            <td className={Style.Ticket_tableData}>Mail</td>
                                            <td>
                                                <div>
                                                    <p style={{ color: "#232323", fontSize: "1rem", fontWeight: "600" }}>28 Aug 2024</p>
                                                    <p>13:23</p>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style={{ display: "flex", columnGap: "0.5rem", alignItems: "center" }}><img src={avatar} alt="" />
                                                <div><p className={Style.Ticket_tableData}>John Doe</p>
                                                    <p id={Style.disputeText}>User Dispute</p></div>
                                            </td>
                                            <td className={Style.Ticket_tableData}>GHNJ657RY</td>
                                            <td className={Style.Ticket_tableData}>Mail</td>
                                            <td><div>
                                                <p style={{ color: "#232323", fontSize: "1rem", fontWeight: "500" }}>28 Aug, 2024</p>
                                                <p>13:23</p></div></td>
                                        </tr>

                                        <tr>
                                            <td style={{ display: "flex", columnGap: "0.5rem", alignItems: "center" }}><img src={avatar} alt="" />
                                                <div><p className={Style.Ticket_tableData}>John Doe</p>
                                                    <p id={Style.disputeText}>User Dispute</p></div>
                                            </td>
                                            <td className={Style.Ticket_tableData}>GHNJ657RY</td>
                                            <td className={Style.Ticket_tableData}>Mail</td>
                                            <td><div>
                                                <p style={{ color: "#232323", fontSize: "1rem", fontWeight: "500" }}>28 Aug, 2024</p>
                                                <p>13:23</p></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                    <div className={Style.Ticket_entireDiv}>

                        <div id={Style.CustomerCare_textDiv}>
                            
                            <p>Average Customer Satisfaction Score</p>

                            <div id={Style.monthDiv} onClick={toggle}>{selectedMonth} <img src={arrow_down} alt="" /></div>


                            {
                                ShowMonths && (

                                    <div id={Style.month_pickerDiv}>

                                        <Month_Picker onMonthSelect={handleMonthSelect} defaultMonth={selectedMonth} />

                                    </div>
                                )
                            }
                        </div>
                        <div id={Style.CustomerCare_Progress_Wrapper}>

                            <div>
                                <div className={Style.Staff_progress}>
                                    <div id={Style.Staff_details}>
                                        <div id={Style.imgDiv}>
                                            <img src={amazing} alt="" />
                                            <p>Amazing</p></div>
                                        <p>76.5%</p>
                                    </div>
                                    <div id={Style.progressDiv}></div>
                                </div>
                                <div className={Style.Staff_progress}>
                                    <div id={Style.Staff_details}>
                                        <div id={Style.imgDiv}>
                                            <img src={good} alt="" />
                                            <p>Good</p></div>
                                        <p>76.5%</p>
                                    </div>
                                    <div id={Style.progressDiv}></div>
                                </div>
                                <div className={Style.Staff_progress}>
                                    <div id={Style.Staff_details}>
                                        <div id={Style.imgDiv}>
                                            <img src={neutral} alt="" />
                                            <p>Neutral</p>
                                        </div>
                                        <p>76.5%</p>
                                    </div>
                                    <div id={Style.progressDiv}></div>
                                </div>

                                <div className={Style.Staff_progress}>
                                    <div id={Style.Staff_details}>
                                        <div id={Style.imgDiv}>
                                            <img src={sad} alt="" />
                                            <p>Bad</p>
                                        </div>
                                        <p>76.5%</p>
                                    </div>
                                    <div id={Style.progressDiv}></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



                {
                    // In-App Call Queries

                    toggleIndex == 2 || toggleIndex == 3 ?

                        <div id={Style.Dashboard_TicketWrapperDiv}>
                            <table>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Date</th>
                                    <th>Ticket ID</th>
                                    <th>Username</th>
                                    <th>Query Type</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>

                                <tbody>
                                    <tr id={Style.Personal_Info_tr}>
                                        <td>1</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>WH457IP</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>In-app Message</td>
                                        <td>
                                            <div className={Style.statusText}>Waiting</div>
                                        </td>
                                        <td><Button text={"Accept"} /></td>
                                    </tr>

                                    <tr id={Style.Personal_Info_tr}>
                                        <td>2</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>WH457IP</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>In-app Message</td>
                                        <td>
                                            <div className={Style.statusText}>Waiting</div>
                                        </td>
                                        <td><Button text={"Accept"} /></td>
                                    </tr>

                                    <tr id={Style.Personal_Info_tr}>
                                        <td>3</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>WH457IP</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>In-app Message</td>
                                        <td>
                                            <div className={Style.statusText}>Waiting</div>
                                        </td>
                                        <td><Button text={"Accept"} /></td>
                                    </tr>

                                    <tr id={Style.Personal_Info_tr}>
                                        <td>4</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>WH457IP</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>In-app Message</td>
                                        <td>
                                            <div className={Style.statusText}>Waiting</div>
                                        </td>
                                        <td><Button text={"Accept"} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> : ""
                }



            </div>
        </div>
    )
}

export default CustomerCare_Queries