import React from "react";
import { Link } from "react-router-dom";

//components
import PersonInfo from "../Info/PersonInfo";
import CaseInfo from "../Info/CaseInfo";
import OtherInfo from "../Info/OtherInfo";

//Context
import StuContext from "../Context/StuContext";

function RoomInfo() {

  let submit = () => {
    StuContext.plus();
  };

  return (
    <div className="roomInfo">
      <PersonInfo />
      <CaseInfo />
      <OtherInfo name={"مانیتور"} data={"monitor"} />
      <OtherInfo name={"پرینتر"} data={"printer"} />
      <OtherInfo name={"اسکنر"} data={"scanner"} />
      <OtherInfo name={"چهارکاره "} data={"quadruple"} />
      <OtherInfo name={"فکس "} data={"fax"} />
      <OtherInfo name={"وایرلس "} data={"wireless"} />
      <OtherInfo name={"سوییچ "} data={"switch"} />
      <div className="footer">
        <Link
          to="/"
          className="c-light text-decoration-none hover-none person-form rounded back-dark m-2 p-3 fs-6 fw-bold"
          onClick={submit}
        >
          تکمیل فرایند
        </Link>
      </div>
    </div>
  );
}

export default RoomInfo;
