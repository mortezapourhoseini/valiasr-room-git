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
import api from "../Api/api";

function Room() {

    const [room, setRoom] = useState(
        {
            college : '',
            roomNumber : '',
            roomTel : '',
            node : '',
            antennaStatus : '',
        }
    )

    const stuContext = useContext(StuContext)

    let addToRoom = (name, value) =>{
        setRoom(
            {
                ...room,
                [name] : value,
            }
        )
    }

    let submitRoom = ()=>
    {
        stuContext.plus();
        
        let newRoom = room;

        api.post('/api/rooms/', newRoom)
        .then(response =>{
            console.log(response);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <div className="room">
            <RoomContext.Provider value={{
                room : room,
                addToRoom : addToRoom,
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
                            onClick={submitRoom} >
                        ثبت اتاق
                    </Link>
                </div>
                
            </RoomContext.Provider>
        </div>
    )
}

export default Room;