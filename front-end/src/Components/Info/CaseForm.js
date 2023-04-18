import React, { useContext, useState } from "react";
import RoomContext from "../Context/RoomContext";
import api from "../Api/api";

function CaseForm({nth}) {

    const [caseInfo, setCaseInfo] = useState(
        {
            college : '',
            roomNumber : '',
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

    let toogleSub = e =>{
        setSub(!sub);
        setCaseInfo(
            {
                ...caseInfo,
                college : roomContext.room.college,
                roomNumber : roomContext.room.roomNumber,
            }
        )
    }

    let inputHandler = e =>{
        let target = e.target.id;
        let value = e.target.value;

        switch (target) {
            case 'model':
                setCaseInfo(
                    {
                        ...caseInfo,
                        model : value,
                    }
                )
                break;
            case 'id-it':
                setCaseInfo(
                    {
                        ...caseInfo,
                        idIt : value,
                    }
                )
                break;
            case 'num':
                setCaseInfo(
                    {
                        ...caseInfo,
                        propertyNum : value,
                    }
                )
                break;
            case 'system':
                setCaseInfo(
                    {
                        ...caseInfo,
                        os : value,
                    }
                )
                break;
            case 'CPU':
                setCaseInfo(
                    {
                        ...caseInfo,
                        cpu : value,
                    }
                )
                break;
            case 'MB':
                setCaseInfo(
                    {
                        ...caseInfo,
                        mb : value,
                    }
                )
                break;
            case 'RAM':
                setCaseInfo(
                    {
                        ...caseInfo,
                        ram : value,
                    }
                )
                break;
            case 'POWER':
                setCaseInfo(
                    {
                        ...caseInfo,
                        power : value,
                    }
                )
                break;
            case 'SSD':
                setCaseInfo(
                    {
                        ...caseInfo,
                        ssd : value,
                    }
                )
                break;
            case 'SSD(M2)':
                setCaseInfo(
                    {
                        ...caseInfo,
                        ssdM2 : value,
                    }
                )
                break;
            case 'H.D.D':
                setCaseInfo(
                    {
                        ...caseInfo,
                        hdd : value,
                    }
                )
                break;
            case 'DVD':
                setCaseInfo(
                    {
                        ...caseInfo,
                        dvd : value,
                    }
                )
                break;
            case 'VGA':
                setCaseInfo(
                    {
                        ...caseInfo,
                        vga : value,
                    }
                )
                break;
            case 'soft':
                setCaseInfo(
                    {
                        ...caseInfo,
                        soft : value,
                    }
                )
                break;
        }
    }

    let submitData = e => {
        e.preventDefault();
        
        let newCaseInfo = caseInfo;

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
                                        <input type="text" name="" id="model" className="form-control tada" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#id-it" className="c-text f-s">
                                        ID-IT :
                                        <input type="text" name="" id="id-it" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#num" className="c-text f-s">
                                        شماره اموال :
                                        <input type="text" name="" id="num" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#system" className="c-text f-s">
                                        سیستم عامل :
                                        <input type="text" name="" id="system" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <h5 className="c-title f-s">سخت افزار کیس  :</h5>
                                    <label htmlFor="#CPU" className="c-text f-s">
                                        CPU :
                                        <input type="text" name="" id="CPU" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#MB" className="c-text f-s">
                                        MB :
                                        <input type="text" name="" id="MB" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#RAM" className="c-text f-s">
                                        RAM :
                                        <input type="text" name="" id="RAM" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#POWER" className="c-text f-s">
                                        POWER :
                                        <input type="text" name="" id="POWER" className="form-control" onChange={inputHandler}/>
                                    </label><label htmlFor="#SSD" className="c-text f-s">
                                        SSD :
                                        <input type="text" name="" id="SSD" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#SSD(M2)" className="c-text f-s">
                                        SSD(M2) :
                                        <input type="text" name="" id="SSD(M2)" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#H.D.D" className="c-text f-s">
                                        H.D.D :
                                        <input type="text" name="" id="H.D.D" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#DVD" className="c-text f-s">
                                        DVD :
                                        <input type="text" name="" id="DVD" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#VGA" className="c-text f-s">
                                        VGA :
                                        <input type="text" name="" id="VGA" className="form-control" onChange={inputHandler}/>
                                    </label>
                                    <label htmlFor="#soft" className="c-text f-s">
                                        نرم افزار ها :
                                        <input type="text" name="" id="soft" placeholder="برنامه ۱ - برنامه ۲" className="form-control" onChange={inputHandler}/>
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