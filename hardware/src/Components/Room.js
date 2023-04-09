import React, { useState } from "react";
import RoomContext from "./Context/RoomContext";

//components
import RoomForm from "./RoomForm";
import PersonInfo from "./Info/PersonInfo";
import CaseInfo from "./Info/CaseInfo";
import OtherInfo from "./Info/OtherInfo";

function Room() {

    const [state, setState] = useState(
        {
            college : '',
            roomNumber : '',
        }
    )

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
            </RoomContext.Provider>
        </div>
    )
}

export default Room;