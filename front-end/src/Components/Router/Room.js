import React, { useContext, useState } from "react";
import RoomContext from "../Context/RoomContext";
import { Link } from "react-router-dom";

//components
import RoomForm from "../RoomForm";
import PersonInfo from "../Info/PersonInfo";
import CaseInfo from "../Info/CaseInfo";
import OtherInfo from "../Info/OtherInfo";

//Context
import StuContext from "../Context/StuContext";

function Room() {

    const [state, setState] = useState(
        {
            college : '',
            roomNumber : '',
        }
    )

    const stuContext = useContext(StuContext)

    let addCollege = text =>{
        setState(
            {
                ...state,
                college : text,
            }
        )
    }

    let addRoomNumber = text =>{
        setState(
            {
                ...state,
                roomNumber : text,
            }
        )
    }

    return (
        <div className="room">
            <RoomContext.Provider value={{
                state : state,
                college : addCollege,
                roomNumber : addRoomNumber,
            }}>
                <RoomForm />
                <PersonInfo />
                <CaseInfo />
                <OtherInfo name={'مانیتور'} />
                <OtherInfo name={'پرینتر'} />
                <OtherInfo name={'اسکنر'} />
                <OtherInfo name={'چهارکاره '} />
                <OtherInfo name={'فکس '} />
                <OtherInfo name={'وایرلس '} />
                <OtherInfo name={'سوییچ '} />
                <div className="footer "> 
                    <Link to="/" 
                            className="c-light text-decoration-none hover-none person-form rounded back-dark m-2 p-3 fs-6 fw-bold"
                            onClick={stuContext.plus} >
                        ثبت اتاق
                    </Link>
                </div>
                
            </RoomContext.Provider>
        </div>
    )
}

export default Room;