import React, { useContext, useState } from "react";

//context
import RoomContext from "../Context/RoomContext";
import StuContext from "../Context/StuContext";

//axios
import api from "../Api/api";

function CaseForm({nth}) {

    const [caseInfo, setCaseInfo] = useState(
        {
            college : '',
            roomNumber : '',
            username : '',
            model : '',
            idIt : '',
            propertyNum : '',
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

    const roomContext = useContext(RoomContext);
    const stucontext = useContext(StuContext);

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
            roomNumber : roomContext.room.roomNumber,
            username : stucontext.student.username,
        };

        api.post('/api/case/', newCaseInfo)
        .then(response =>{
            console.log(response);
        })
        .catch(err =>{
            console.log(err);
        })

        console.log(caseInfo)
    }
    
    
    return (
        <div className={`person-form rounded back-gray mb-3 ${sub ? 'pb-2' : ''}`} >
            <h4 className="back-dark c-light f-m info-title" onClick={toogleSub}>اطلاعات کیس {nth}</h4>
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
                                        <input required type="text" name="idIt" id="id-it" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#num" className="c-text f-s">
                                        شماره اموال :
                                        <input required type="text" name="propertyNum" id="num" className="form-control" onChange={inputHandler}/>
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
                                        <input type="text" name="ssdM2" id="SSD(M2)" className="form-control" onChange={inputHandler}/>
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
                                </div>
                            </form>
                            )
                        : '﹀'
                    }
        </div>
    )
}

export default CaseForm;