import React, { useState } from "react";
import CaseForm from "./CaseForm";

function CaseInfo() {

    const [count, setCount] = useState(0);

    let counterPlus = () =>setCount(count + 1);
    

    return (
        <div className="person back-light m-2 p-4 rounded">
            <h3 className="c-title">اطلاعات کیس ها :</h3>
            <p className="c-text f-s">
                برای این اتاق اطلاعات {count} کیس وارد شده
            </p>
            <hr />
            <div className="area">
                <CaseForm counterplus={counterPlus} key={Date.now} />
            </div>
        </div>
    )
}

export default CaseInfo;