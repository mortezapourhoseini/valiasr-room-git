import React, { useState, useEffect } from "react";
import RoomContext from "../Context/RoomContext";
import { useNavigate } from "react-router-dom";

//components
import RoomForm from "../Info/RoomForm";

//axios
import api from "../Api/api";
import RoomInfo from "../Info/RoomInfo";

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

    

    let addToRoom = (name, value) =>{
        setRoom(
            {
                ...room,
                [name] : value,
            }
        )
    }

    const [action, setAction] = useState(false);

    let toogleAction = ()=> setAction(!action);

    let refreshRoom = ()=> setRoom(
        {
            college : '',
            room_number : '',
            user : '',
            room_phone_number : '',
            node : '',
            antennaStatus : '',
        }
    )

    return (
        <div className="room">
            <RoomContext.Provider value={{
                room : room,
                addToRoom : addToRoom,
                toogleAction : toogleAction,
                refreshRoom : refreshRoom,
            }}>
                <div className="swiper-pagination flex items-center relative swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span className={`swiper-pagination-bullet ${!action ? "swiper-pagination-bullet-active" : ""}`}></span>
                    <span className={`swiper-pagination-bullet ${!action ? "swiper-pagination-bullet-active" : ""}`}></span>
                </div>
                {
                    !action ? <RoomForm /> : <RoomInfo />
                }
                   
            </RoomContext.Provider>
        </div>
    )
}

export default Room;