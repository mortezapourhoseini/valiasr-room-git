import React, { useContext, useState, useEffect } from "react";
import RoomContext from "../Context/RoomContext";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
  
    useEffect(() => {
      const token = api.defaults.headers.Authorization;
      setLoggedIn(token === undefined);
  
      if (loggedIn) {
        navigate("/login", { replace: true });
      }
    }, [loggedIn, navigate]);

    const [room, setRoom] = useState(
        {
            college : '',
            room_number : '',
            user : '',
            room_phone_number : '',
            node : '',
            antennaStatus : '',
        }
    )

    const stuContext = useContext(StuContext);

    const [valid, setValid] = useState(true);

    const [status, setStatus] = useState('wrong');

    let addToRoom = (name, value) =>{
        setRoom(
            {
                ...room,
                [name] : value,
            }
        )
    }

    let apologize = (status,text)=>{
        return (
            <p className="mb-0 text-center border-bottom border-danger text-danger">
                <strong>{status}</strong>
                <br />
                {text}
            </p>
        )
    }

    let submitRoom = ()=>
    {
        
        
        let newRoom = {
            ...room,
            user : localStorage.getItem("user"),
        };

        api.post('/api/room/', newRoom)
        .then(response =>{
            console.log(response);
            if (response.status === 201) {
                setValid(true);
                stuContext.plus();
                setRoom(
                    {
                        college : '',
                        room_number : '',
                        user : '',
                        room_phone_number : '',
                        node : '',
                        antennaStatus : '',
                    }
                );
                navigate('/');
            }
            else
            {
                setStatus('could not be saved');
                setValid(false);
            }
        })
        .catch(err =>{
            console.log(err);
            if (err.response.status === 401)
            {
                setStatus('refresh site');
            }
            else if (err.response.status === 400)
            {
                setStatus('complete all input');
            }
            setValid(false);
        })
    }

    return (
        <div className="room">
            <RoomContext.Provider value={{
                room : room,
                addToRoom : addToRoom,
                apologize : apologize,
            }}>
                <RoomForm />
                <PersonInfo />
                <CaseInfo />
                <OtherInfo name={'مانیتور'} data={'monitor'} />
                <OtherInfo name={'پرینتر'} data={'printer'} />
                <OtherInfo name={'اسکنر'} data={'scanner'} />
                <OtherInfo name={'چهارکاره '} data={'quadruple'} />
                <OtherInfo name={'فکس '} data={'fax'} />
                <OtherInfo name={'وایرلس '} data={'wireless'} />
                <OtherInfo name={'سوییچ '} data={'switch'} />
                <div className="footer"> 
                    {
                        !valid
                            ? <p className="mb-0 text-center border-bottom border-top border-danger text-danger">{status}</p>
                            : ''
                    }
                    <button type="submit"
                            className="c-light text-decoration-none hover-none person-form rounded back-dark m-2 p-3 fs-6 fw-bold"
                            onClick={submitRoom}
                            >
                        ثبت اتاق
                    </button>
                </div>
                
            </RoomContext.Provider>
        </div>
    )
}

export default Room;