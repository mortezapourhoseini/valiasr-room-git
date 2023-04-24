import React, { useState } from "react";
import OtherForm from "./OtherForm";

function OtherInfo({name, data}) {

    const [count, setCount] = useState(0);

    let counterPlus = () =>setCount(count + 1);

    return (
        <div className="person back-light m-2 p-4 rounded">
            <h3 className="c-title">اطلاعات {name}ها :</h3>
            <p className="c-text f-s">
                برای این اتاق اطلاعات {count} {name} وارد شده
            </p>
            <hr />
            <div className="area">
                <OtherForm name={name} data={data} key={Date.now} counterplus={counterPlus}/> 
            </div>
        </div>
    )
}

export default OtherInfo;