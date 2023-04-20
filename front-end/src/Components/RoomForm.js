import React, { useContext } from "react";
import RoomContext from "./Context/RoomContext";

function RoomForm() {

    const roomContext = useContext(RoomContext);

    let inputHandler = e =>{

        const {name, value} = e.target;

        roomContext.addToRoom(name, value);

    }



    return (
        <div className="room back-light m-2 p-4 rounded">
            <h3 className="c-title">فرم ثبت اطلاعات اتاق :</h3>
            <form className="form-inline" > 
                <div className="form-group pe-1 room-form">

                <label htmlFor="#roomNumber" className="c-text f-m">
                        دانشکده :
                        <select class="form-select form-select-lg c-option" id="college" name="college" aria-label=".form-select-lg example" onChange={inputHandler}>
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
                        <input required type="number" name="roomNumber" id="roomNumber" minLength={1} className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#roomTel" className="c-text f-m">
                        تلفن ثابت اتاق :
                        <input required type="tel" name="roomTel" id="roomTel" placeholder="مثال : 34279346" className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#node" className="c-text f-m">
                        تعداد node :
                        <input required type="number" name="node" id="node" placeholder="" className="form-control" onChange={inputHandler}/>
                    </label>
                    <label htmlFor="#anten" className="c-text f-m">
                        وضعیت آنتن دهی :
                        <input required type="number" name="antennaStatus" min={1} max={3} id="antennaStatus" placeholder="1-3" className="form-control" onChange={inputHandler}/>
                    </label>
                </div>
            </form>
        </div>      
    )
}

export default RoomForm;
