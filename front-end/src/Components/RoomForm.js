import React, { useContext, useState } from "react";
import RoomContext from "./Context/RoomContext";

function RoomForm() {

    const [room, setRoom] = useState({
        college : '',
        roomNumber : '',
        roomTel : '',
        node : '',
        antennaStatus : '',
    })

    const roomContext = useContext(RoomContext);

    let inputHandler = e =>{
        let target = e.target.id;
        let value = e.target.value;

        switch (target) {
            case 'college':
                setRoom({
                    ...room,
                    college : value,
                });
                roomContext.college(value);
                break;
            case 'roomNumber':
                setRoom({
                    ...room,
                    roomNumber : value,
                });
                roomContext.roomNumber(value);
                break;
            case 'roomTel':
                setRoom({
                    ...room,
                    roomTel : value,
                })
                break;
            case 'node':
                setRoom({
                    ...room,
                    node : value,
                })
                break;
            case 'antennaStatus':
                setRoom({
                    ...room,
                    antennaStatus : value,
                })
                break;
        }
    }



    return (
        <div className="room back-light m-2 p-4 rounded">
            <h3 className="c-title">فرم ثبت اطلاعات اتاق :</h3>
            <form className="form-inline" > 
                <div className="form-group pe-1 room-form">

                <label htmlFor="#roomNumber" className="c-text f-m">
                        دانشکده :
                        <select class="form-select form-select-lg c-option" id="college" aria-label=".form-select-lg example" onChange={inputHandler}>
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
                        <input type="number" name="" id="roomNumber" minLength={1} className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#roomTel" className="c-text f-m">
                        تلفن ثابت اتاق :
                        <input type="tel" name="" id="roomTel" placeholder="مثال : 34279346" className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#node" className="c-text f-m">
                        تعداد node :
                        <input type="number" name="" id="node" placeholder="" className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#anten" className="c-text f-m">
                        وضعیت آنتن دهی :
                        <input type="number" name="" min={1} max={3} id="antennaStatus" placeholder="1-3" className="form-control" onChange={inputHandler}/>
                    </label>
                </div>
            </form>
        </div>      
    )
}

export default RoomForm;
