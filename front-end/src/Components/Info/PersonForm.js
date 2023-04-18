import React, { useContext, useState } from "react";
import RoomContext from "../Context/RoomContext";
import api from "../Api/api";

function PersonForm({nth}) {

    const [person, setPerson] = useState(
        {
            college : '',
            roomNumber : '',
            name : '',
            family : '',
            personId : '',
            phone : '',
        }
    )

    const [sub, setSub] = useState(false);

    const roomContext = useContext(RoomContext);

    let toogleSub = e =>{
        setSub(!sub);
        setPerson(
            {
                ...person,
                college : roomContext.room.college,
                roomNumber : roomContext.room.roomNumber,
            }
        )
    }
    
    let inputHandler = e =>{
        let target = e.target.id;
        let value = e.target.value;

        switch (target) {
            case 'personName':
                setPerson(
                    {
                        ...person,
                        name : value,
                    }
                )
                break;
            case 'personFamily':
                setPerson(
                    {
                        ...person,
                        family : value,
                    }
                )
                break;
            case 'personId':
                setPerson(
                    {
                        ...person,
                        personId : value,
                    }
                )
                break;
            case 'personTel':
                setPerson(
                    {
                        ...person,
                        phone : value,
                    }
                )
                break;
        }
    }
    
    let submitData = e => {
        e.preventDefault();
        
        let newPerson = person;

        api.post('/api/rooms/', newPerson)
        .then(response =>{
            console.log(response);
        })
        .catch(err =>{
            console.log(err);
        })
        
        console.log(person);
    }

    return (
        <div className={`person-form rounded back-gray mb-3 ${sub ? 'pb-2' : ''}`} >
            <h4 className="back-dark c-light f-m info-title" onClick={toogleSub}>اطلاعات فرد {nth}</h4>
                    {
                        sub 
                        ? (
                            <form className="form-inline slide-in-down" onSubmit={submitData}> 
                                <div className="form-group pe-1 room-form">
                                    <label htmlFor="#personName" className="c-text f-s">
                                        نام فرد :
                                        <input type="text" name="" id="personName" className="form-control tada" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#personFamily" className="c-text f-s">
                                        نام خانوادگی :
                                        <input type="text" name="" id="personFamily" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#personId" className="c-text f-s">
                                        کد ملی :
                                        <input type="" name="" id="personId" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#personTel" className="c-text f-s">
                                        شماره همراه :
                                        <input type="tel" name="" id="personTel" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <button type="submit" className="btn btn-primary" onClick={submitData}>ثبت</button>
                                </div>
                            </form>
                            )
                        : '﹀'
                    }
        </div>
    )
}

export default PersonForm;