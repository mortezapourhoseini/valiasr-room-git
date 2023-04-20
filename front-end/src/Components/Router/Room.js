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

//axios
import api from "../Api/api";

function Room() {

    const [room, setRoom] = useState(
        {
            college : '',
            roomNumber : '',
            username : '',
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
        
        let newRoom = {
            ...room,
            username : stuContext.student.username,
        };

        api.post('/api/room/', newRoom)
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
                <OtherInfo name={'مانیتور'} data={'manitor'} />
                <OtherInfo name={'پرینتر'} data={'printer'} />
                <OtherInfo name={'اسکنر'} data={'scanner'} />
                <OtherInfo name={'چهارکاره '} data={'quadruple'} />
                <OtherInfo name={'فکس '} data={'fax'} />
                <OtherInfo name={'وایرلس '} data={'wireless'} />
                <OtherInfo name={'سوییچ '} data={'switch'} />
                <div className="footer "> 
                    <Link to="/home" 
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