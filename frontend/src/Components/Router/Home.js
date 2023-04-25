import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StuContext from "../Context/StuContext";
import { useNavigate } from "react-router-dom";
import api from "../Api/api";

function Home() {
  const stucontext = useContext(StuContext);

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = api.defaults.headers.Authorization;
    setLoggedIn(token === undefined);

    if (loggedIn) {
      navigate("/login", { replace: true });
    }
  }, [loggedIn, navigate]);

  return (
    <section className="back-light m-2 rounded">
      <div className="container d-flex flex-column align-items-center pt-4 pb-5">
        <h1 className="jumbotron-heading">خوش آمدید!</h1>
        <p className="lead text-muted">
          شما در حال حاضر اطلاعات {stucontext.student.counter} اتاق را وارد
          کردید
        </p>

        <Link
          to="/room"
          className="c-light text-decoration-none hover-none btn btn-success text-center justify-content-center col-5 mb-4"
        >
          ✚ اتاق جدید
        </Link>

        <p className="lead text-muted">
          اگر در فرایند ارسال اطلاعات دچار مشکل شدید
          <a href="#" className="link">
            اینجارا کلیک کنید
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Home;
