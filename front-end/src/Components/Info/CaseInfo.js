import React, { useState } from "react";
import CaseForm from "./CaseForm";
import Submited from "./submited";

function CaseInfo() {

    const [views, setViews] = useState(
        [ { nth : 1, lock : false} ]
    );

    let numHandler = e => {
        let n = e.target.value;

        if (n >= 1 && n <= 4) {
            const view = [];

            for (let i = 1 ; i <= n ; i++)
            {
                view.push(
                    {
                        nth : i,
                        lock : false
                    }
                )
            }

            setViews(view);

            console.log(views)
        }
        else {
            alert("Unvalid number");
            setViews([{ nth : 1, lock : false}]);
        }
    }

    return (
        <div className="person back-light m-2 p-2 rounded">
            <h3 className="c-title">اطلاعات کیس ها :</h3>
            <label htmlFor="#pNumber" className="c-text f-s">
                تعداد کیس های داخل اتاق :
                <input type="number" value={views.length} className="form-control" max={4} min={1} onChange={numHandler} />
            </label>
            <hr />
            <div className="area">
                {
                    views.map(item =>{
                      return item.lock ? (<Submited />) : (<CaseForm nth={item.nth} key={Date.now} />)
                    })
                }
            </div>
        </div>
    )
}

export default CaseInfo;