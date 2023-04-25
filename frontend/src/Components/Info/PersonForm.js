import React, { useContext, useState } from "react";

//context
import RoomContext from "../Context/RoomContext";

//axios
import api from "../Api/api";

function PersonForm({counterplus}) {

    const [person, setPerson] = useState(
        {
            college : '',
            room_number : '',
            first_name : '',
            last_name : '',
            person_id : '',
            phone_number : '',
        }
    )

    const [sub, setSub] = useState(false);

    const [valid, setValid] = useState(true);

    const [status, setStatus] = useState('wrong');

    const roomContext = useContext(RoomContext);
    
    let toogleSub = ()=>{
        setSub(!sub);
    }

    
    let inputHandler = e =>{
        
        const {name, value} = e.target;

        setPerson({
            ...person,
            [name] : value,
        })
    }

    
    let submitData = e => {
        e.preventDefault();
        
        let newPerson = {
            ...person,
            college : roomContext.room.college,
            room_number : roomContext.room.room_number,
        };

        api.post('/api/person/', newPerson)
        .then(response =>{
            console.log(response);
            if (response.status === 201) {
                setValid(true);
                counterplus();
                toogleSub();
                setPerson(
                    {
                        college : '',
                        room_number : '',
                        first_name : '',
                        last_name : '',
                        person_id : '',
                        phone_number : '',
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
            console.log(err.response);
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
        <div className={`person-form rounded back-gray mb-3 ${sub ? 'pb-2' : ''}`} >
            
                     <h4 className="back-dark c-light f-m info-title" onClick={toogleSub}>افزودن فرد</h4>
                         {
                             sub 
                             ? (
                                 <form className="form-inline slide-in-down" onSubmit={submitData}> 
                                     <div className="form-group p-3 room-form">
                                         <label htmlFor="#personName" className="c-text f-s">
                                             نام فرد :
                                             <input required type="text" name="first_name" id="personName" className="form-control tada" onChange={inputHandler}/>
                                         </label>
                                         <label htmlFor="#personFamily" className="c-text f-s">
                                             نام خانوادگی :
                                             <input required type="text" name="last_name" id="personFamily" className="form-control" onChange={inputHandler}/>
                                         </label>
                                         <label htmlFor="#personId" className="c-text f-s">
                                             کد ملی :
                                             <input required type="text" name="person_id" id="personId" className="form-control" onChange={inputHandler}/>
                                         </label>
                                         <label htmlFor="#personTel" className="c-text f-s">
                                             شماره همراه :
                                             <input required type="text" name="phone_number" id="personTel" className="form-control" onChange={inputHandler}/>
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

export default PersonForm;