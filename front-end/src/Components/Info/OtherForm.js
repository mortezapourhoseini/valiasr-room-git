import React, { useContext, useState } from "react";

//context
import RoomContext from "../Context/RoomContext";

//axios
import api from "../Api/api";


function OtherForm({name, data, counterplus}) {

    const [device, setDevice] = useState(
        {
            deviceName : '',
            deviceModel : '',
            deviceID : '',
            college : '',
            roomNumber : '',
            user : '',
        }
    )

    const [sub, setSub] = useState(false);

    const [valid, setValid] = useState(true);

    const [status, setStatus] = useState('wrong');

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
            deviceName : data,
            college : roomContext.room.college,
            roomNumber : roomContext.room.roomNumber,
            user : localStorage.getItem("user"),
        };
        
        api.post('/api/device/', newDevice)
        .then(response =>{
            console.log(response);
            if (response.status === 201) {
                setValid(true);
                counterplus();
                toogleSub();
                setDevice(
                    {
                        deviceName : '',
                        deviceModel : '',
                        deviceID : '',
                        college : '',
                        roomNumber : '',
                        user : '',
                    }
                )

            }
            else
            {
                setStatus('could not be saved');
                setValid(false);
            }
        })
        .catch(err =>{
            console.log(err.response.status);
            if (err.response.status === 401)
            {
                setStatus('refresh site');
            }
            else if (err.response.status === 400)
            {
                setStatus('complete all input correctly');
            }
            setValid(false);
        })
    }

    return (
        <div className={`person-form rounded back-gray mb-3 ${sub ? 'pb-2' : ''}`} >
            <h4 className="back-dark c-light f-m info-title" onClick={toogleSub}>افزودن {name} </h4>
                    {
                        sub 
                        ? (
                            <form className="form-inline slide-in-down" onSubmit={submitData}> 
                                <div className="form-group pe-1 room-form">
                                    <label htmlFor="#deviceModel" className="c-text f-s">
                                        مدل :
                                        <input required type="text" name="deviceModel" id="deviceModel" className="form-control tada" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#deviceID" className="c-text f-s">
                                        شماره اموال :
                                        <input required type="text" name="deviceID" id="deviceID" className="form-control"onChange={inputHandler}/>
                                    </label>
                                    <button type="submit" className="btn btn-primary">ثبت</button>
                                    {
                                        !valid
                                            ? <p className="mb-0 text-center border-bottom border-danger text-danger">{status}</p>
                                            : ''
                                    }
                                </div>
                            </form>
                            )
                        : '﹀'
                    }
        </div>
    )
}

export default OtherForm;