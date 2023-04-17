import React, { useState } from "react";
import OtherForm from "./OtherForm";

function OtherInfo({name}) {

    const [views, setViews] = useState([1]);

    let numHandler = e => {
        let n = e.target.value;

        if (n >= 1 && n <= 4) {
            const view = [];

            for (let i = 1 ; i <= n ; i++)
            {
                view.push(i)
            }

            setViews(view);
        }
        else {
            alert("Unvalid number");
            setViews([1]);
        }
    }

    return (
        <div className="person back-light m-2 p-2 rounded">
            <h3 className="c-title">اطلاعات {name}ها :</h3>
            <label htmlFor="#pNumber" className="c-text f-s">
                تعداد {name}های داخل اتاق :
                <input type="number" value={views.length} className="form-control" max={4} min={1} onChange={numHandler} />
            </label>
            <hr />
            <div className="area">
                {
                    views.map(item => <OtherForm name={name} nth={item} key={Date.now} />)
                }
            </div>
        </div>
    )
}

export default OtherInfo;