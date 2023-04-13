import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StuContext from "../Context/StuContext";

function Home() {

    const stuContext = useContext(StuContext);

    return (
        <section className="back-light m-2 rounded">
            <div className="container d-flex flex-column align-items-center pt-4 pb-5">
                <h1 className="jumbotron-heading">خوش آمدید!</h1>
                <p className="lead text-muted">شما در حال حاضر اطلاعات {stuContext.student.counter} اتاق را وارد کردید</p>
                
                    <Link to="/room" className="c-light text-decoration-none hover-none btn btn-success text-center justify-content-center col-5 mb-4">
                        
                            ✚ اتاق جدید
                        
                    </Link>
                
                <p className="lead text-muted">اگر در فرایند ارسال اطلاعات دچار مشکل شدید <a href="#" className="link">اینجارا کلیک کنید</a>.</p>
            </div>
        </section>
    )
}

export default Home