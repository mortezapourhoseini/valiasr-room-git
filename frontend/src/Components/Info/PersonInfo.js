import React, { useState } from "react";
import PersonForm from "./PersonForm";

function PersonInfo() {

    const [count, setCount] = useState(0);

    let counterPlus = () =>setCount(count + 1);

    return (
        <div className="person back-light m-2 p-4 rounded">
            <h3 className="c-title">اطلاعات افراد :</h3>
            <p className="c-text f-s">
                برای این اتاق اطلاعات {count} نفر وارد شده
            </p>
            <hr />
            <div className="area">
                <PersonForm counterplus={counterPlus} key={Date.now} />
            </div>
        </div>
    )
}

export default PersonInfo;