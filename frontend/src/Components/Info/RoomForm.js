import React, { useContext, useState } from "react";
import RoomContext from "../Context/RoomContext";
import api from "../Api/api";

function RoomForm() {

    const roomContext = useContext(RoomContext);

    const [valid, setValid] = useState(true);

    const [status, setStatus] = useState('wrong');

    let inputHandler = e =>{

        const {name, value} = e.target;

        roomContext.addToRoom(name, value);

    }

    let submitRoom = e=>
    {
        e.preventDefault();
        
        let newRoom = {
            ...roomContext.room,
            user : localStorage.getItem("user"),
        };

        

        api.post('/api/room/', newRoom)
        .then(response =>{
            console.log(response.data);
            if (response.status === 201 || response.status === 200) {
                setValid(true);
                roomContext.toogleAction();
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
        <div className="room back-light m-2 p-4 rounded">
            <h3 className="c-title ">فرم ثبت اطلاعات اتاق :</h3>
            <form className="form-inline" onSubmit={submitRoom}> 
                <div className="form-group pe-1 room-form">

                <label htmlFor="#roomNumber" className="c-text f-m">
                        دانشکده :
                        <select className="form-select form-select-lg c-option" id="college" name="college" aria-label=".form-select-lg example" onChange={inputHandler}>
                        <option selected disabled >نام دانشکده</option>
                        <option value="فنی مهندسی">فنی مهندسی</option>
                        <option value="علوم پایه">علوم پایه</option>
                        <option value="ایران شناسی">ایران شناسی</option>
                        <option value="کشاورزی">کشاورزی</option>
                        <option value="3"></option>
                    </select>
                    </label>
                    <label htmlFor="#roomNumber" className="c-text f-m">
                        شماره اتاق :
                        <input required type="text" name="room_number" id="roomNumber" minLength={1} className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#roomTel" className="c-text f-m">
                        تلفن ثابت اتاق :
                        <input required type="text" name="room_phone_number" id="roomTel" placeholder="مثال : 34279346" className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#node" className="c-text f-m">
                        تعداد node :
                        <input required type="text" name="node" id="node" placeholder="" className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#anten" className="c-text f-m">
                        وضعیت آنتن دهی :
                        <input required type="text" name="antennaStatus" min={1} max={3} id="antennaStatus" placeholder="1-3" className="form-control" onChange={inputHandler}/>
                    </label>
                    <div className="footer"> 
                        {
                            !valid
                                ? <p className="mb-0 text-center border-bottom border-top border-danger text-danger">{status}</p>
                                : ''
                        }
                        <button type="submit"
                                className="c-light text-decoration-none hover-none person-form rounded back-dark m-2 p-3 fs-6 fw-bold"
                                >
                            ثبت اتاق
                        </button>
                    </div>
                </div>
            </form>
        </div>      
    )
}

export default RoomForm;
