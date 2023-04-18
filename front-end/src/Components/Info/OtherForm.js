import React, { useContext, useState } from "react";
import RoomContext from "../Context/RoomContext";
import api from "../Api/api";


function OtherForm({nth, name}) {

    const [device, setDevice] = useState(
        {
            deviceName : '',
            deviceModel : '',
            deviceID : '',
            college : '',
            roomNumber : '',
        }
    )

    const [sub, setSub] = useState(false);

    const roomContext = useContext(RoomContext);

    let toogleSub = e =>{
        setSub(!sub);
    }

    let inputHandler = e =>{
        const {name, value} = e.target;

        setDevice(
            {
                ...device,
                [name] : value,
            }
        )
    }
    
    let submitData = e => {
        e.preventDefault();
        
        let newDevice = {
            ...device,
            deviceName : name,
            college : roomContext.room.college,
            roomNumber : roomContext.room.roomNumber,
        };

        api.post('/api/device/', newDevice)
        .then(response =>{
            console.log(response);
        })
        .catch(err =>{
            console.log(err);
        })
        
        console.log(newDevice)
    }

    return (
        <div className={`person-form rounded back-gray mb-3 ${sub ? 'pb-2' : ''}`} >
            <h4 className="back-dark c-light f-m info-title" onClick={toogleSub}>اطلاعات {name} {nth}</h4>
                    {
                        sub 
                        ? (
                            <form className="form-inline slide-in-down" onSubmit={submitData}> 
                                <div className="form-group pe-1 room-form">
                                    <label htmlFor="#deviceModel" className="c-text f-s">
                                        مدل :
                                        <input type="text" name="deviceModel" id="deviceModel" className="form-control tada" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#deviceID" className="c-text f-s">
                                        شماره اموال :
                                        <input type="text" name="deviceID" id="deviceID" className="form-control"onChange={inputHandler}/>
                                    </label>
                                    <button type="submit" className="btn btn-primary">ثبت</button>
                                </div>
                            </form>
                            )
                        : '﹀'
                    }
        </div>
    )
}

export default OtherForm;