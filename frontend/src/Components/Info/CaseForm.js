import React, { useContext, useState } from "react";

//context
import RoomContext from "../Context/RoomContext";

//axios
import api from "../Api/api";

function CaseForm({key, counterplus}) {

    const [caseInfo, setCaseInfo] = useState(
        {
            college : '',
            room_number : '',
            model : '',
            ID_IT : '',
            property_number : '',
            os : '',
            cpu : '',
            mb : '',
            ram : '',
            power : '',
            ssd : '',
            ssdM2 : '',
            hdd : '',
            dvd : '',
            vga : '',
            soft : '',
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

        setCaseInfo(
            {
                ...caseInfo,
                [name] : value,
            }
        )
    }

    let submitData = e => {
        e.preventDefault();
        
        let newCaseInfo = {
            ...caseInfo,
            college : roomContext.room.college,
            room_number : roomContext.room.room_number,
        };

        api.post('/api/case/', newCaseInfo)
        .then(response =>{
            if (response.status === 201) {
                setValid(true);
                counterplus();
                toogleSub();
                setCaseInfo(
                    {
                        college : '',
                        room_number : '',
                        model : '',
                        ID_IT : '',
                        property_number : '',
                        os : '',
                        cpu : '',
                        mb : '',
                        ram : '',
                        power : '',
                        ssd : '',
                        ssdM2 : '',
                        hdd : '',
                        dvd : '',
                        vga : '',
                        soft : '',
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
        <div className={`person-form rounded back-gray mb-3 ${sub ? 'pb-2' : ''}`} >
            <h4 className="back-dark c-light f-m info-title" onClick={toogleSub}>افزودن کیس</h4>
                    {
                        sub 
                        ? (
                            <form className="form-inline slide-in-down" onSubmit={submitData}> 
                                <div className="form-group pe-1 room-form">
                                    <label htmlFor="#model" className="c-text f-s">
                                        مدل :
                                        <input required type="text" name="model" id="model" className="form-control tada" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#id-it" className="c-text f-s">
                                        ID-IT :
                                        <input required type="text" name="ID_IT" id="id-it" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#num" className="c-text f-s">
                                        شماره اموال :
                                        <input required type="text" name="property_number" id="num" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#system" className="c-text f-s">
                                        سیستم عامل :
                                        <input required type="text" name="os" id="system" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <h5 className="c-title f-s">سخت افزار کیس  :</h5>
                                    <label htmlFor="#CPU" className="c-text f-s">
                                        CPU :
                                        <input required type="text" name="cpu" id="CPU" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#MB" className="c-text f-s">
                                        MB :
                                        <input required type="text" name="mb" id="MB" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#RAM" className="c-text f-s">
                                        RAM :
                                        <input required type="text" name="ram" id="RAM" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#POWER" className="c-text f-s">
                                        POWER :
                                        <input required type="text" name="power" id="POWER" className="form-control" onChange={inputHandler}/>
                                    </label><label htmlFor="#SSD" className="c-text f-s">
                                        SSD :
                                        <input required type="text" name="ssd" id="SSD" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#SSD(M2)" className="c-text f-s">
                                        SSD(M2) :
                                        <input type="text" required name="ssdM2" id="SSD(M2)" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#H.D.D" className="c-text f-s">
                                        H.D.D :
                                        <input required type="text" name="hdd" id="H.D.D" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#DVD" className="c-text f-s">
                                        DVD :
                                        <input required type="text" name="dvd" id="DVD" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#VGA" className="c-text f-s">
                                        VGA :
                                        <input required type="text" name="vga" id="VGA" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#soft" className="c-text f-s">
                                        نرم افزار ها :
                                        <input required type="text" name="soft" id="soft" placeholder="برنامه ۱ - برنامه ۲" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <button type="submit" className="btn btn-primary" >ثبت</button>
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

export default CaseForm;