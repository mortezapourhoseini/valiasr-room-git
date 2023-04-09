import React from "react";

function Section() {
    return (
        <section className="back-light m-2 rounded">
            <div className="container d-flex flex-column align-items-center pt-4 pb-5">
                <h1 className="jumbotron-heading">خوش آمدید!</h1>
                <p className="lead text-muted">برای احراز هویت و شروع؛ دکمه ورود را بزنید:</p>
                <button className="btn btn-success col-5 mb-4">ورود</button>
                <p className="lead text-muted">اگر در فرایند احراز هویت دچار مشکل شدید <a href="#">اینجارا کلیک کنید</a>.</p>
            </div>
        </section>
    )
}

export default Section;