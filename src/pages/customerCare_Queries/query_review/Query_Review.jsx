import React from 'react'
import Style from '../query_review/Query_Review.module.css'
import Stats_Card from '../../../../../components/stats_card/Stats_Card'
import person from '../../../../../assets/images/Person1.png'
import Staff_Card from '../../../admin/staff/all_staff/component/Staff_Card'
import Header from '../../../../../components/header/Header'
import Input from '../../../../../components/SignUp_input/Input'
import Button from '../../../../../components/button/Button'



const Query_Review = () => {



    const user_card = [
        {
            img: person,
            name: "John Doe",
            position: "Johndoe@gmail.com",
            status: "Online"
        },
    ]

    return (
        <div id={Style.Query_Review_mainDiv}>

            <Header
                headerText={"Review"}
                headerInfo={"let's get rolling"} />

            <div id={Style.Query_Review_wrapperDiv}>

                <p id={Style.queryText}>Query Details</p>
                <div id={Style.Query_Review_mapDiv}>
                    <p className={Style.Query_Review_headerText}>User</p>
                    {
                        user_card.map((obj) => {

                            return (
                                <Staff_Card
                                    img={obj.img}
                                    name={obj.name}
                                    position={obj.position}
                                    status={obj.status} />
                            )
                        })
                    }
                </div>

                <p className={Style.Query_Review_headerText}>Query</p>

                <div id={Style.Query_Review_table_wrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>Ticket ID</th>
                            <th>Query Category</th>
                            <th>Query</th>
                            <th>Attachment</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td className={Style.Query_Review_headerText}>WH457IP</td>
                                <td className={Style.Query_Review_headerText}>User Dispute</td>
                                <td>
                                    <div id={Style.Query_td}>
                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate

                                        Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate
                                    </div>

                                </td>
                                <td className={Style.Query_Review_headerText}>Nil</td>

                                <td>
                                    <div id={Style.Query_Review_td_button}>
                                        {/* <button>Reviewed</button> */}
                                        <button>Escalate</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <p id={Style.resolutionText}>Resolution</p>

                    <p id={Style.formText}>Fill details to continue</p>

                    <div id={Style.Query_Review_formDiv}>

                        <form action="">
                            <div id={Style.inputDiv}>
                                <Input
                                    type={"text"}
                                    placeholder={"Type customer email"}
                                    label={"Customer Email"} />

                               
                               <div id={Style.textareaDiv}>

                                     <textarea name="" id={Style.textarea} placeholder="Type your resolution"></textarea>
                               
                                <label id={Style.label}>Resolution</label>
                               </div>

                               <Button text ={"Send Resolution"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Query_Review