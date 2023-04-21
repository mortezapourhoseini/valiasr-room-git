import React from "react";

import "bootstrap/dist/css/bootstrap.css"

function Header() {
    
   
    return (
        <header>
            <div className="navbar navbar-dark back-dark shadow-m m-1 mt-2 rounded-3">
                <div className="container d-flex justify-content-between ">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>دانشگاه ولی عصر رفسنجان</strong>
                    </a>
                </div>
            </div>     
        </header>
    )
}

export default Header;