import React, { useContext, useState } from "react";
import RoomContext from "../Context/RoomContext";
import api from "../../Api/api";


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
        setDevice(
            {
                ...device,
                deviceName : name,
                college : roomContext.state.college,
                roomNumber : roomContext.state.roomNumber,
            }
        )
    }

    let inputHandler = e =>{
        let target = e.target.id;
        let value = e.target.value;

        switch (target) {
            case 'deviceModel':
                setDevice(
                    {
                        ...device,
                        deviceModel : value,
                    }
                )
                break;
            case 'deviceID':
                setDevice(
                    {
                        ...device,
                        deviceID : value,
                    }
                )
                break;
        }
    }
    
    let submitData = e => {
        e.preventDefault();
        
        let newDevice = device;

        console.log(newDevice);

        api.post('/api/rooms/', newDevice)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log('error');
        });
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
                                        <input type="text" name="" id="deviceModel" className="form-control tada" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#deviceID" className="c-text f-s">
                                        شماره اموال :
                                        <input type="text" name="" id="deviceID" className="form-control"onChange={inputHandler}/>
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