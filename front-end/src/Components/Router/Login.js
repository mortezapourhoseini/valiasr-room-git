import React, { useContext } from "react";
import "../style/login.css";
import StuContext from "../Context/StuContext";
import api from "../Api/api";
import { Link } from "react-router-dom";

function Login({value}) {

    const stucontext = useContext(StuContext);

    let inputHandler = e =>{
        const {name, value} = e.target;
        stucontext.addUser(name, value);
    }

    let login = e =>{
        e.preventDefault();

        const {username, pass, isValid} = stucontext.student;

        let newUser = {
            username : username,
            pass : pass,
        };

        api.post('/api/auth/', newUser)
        .then(response =>{
            isValid(response.data.token);
        })
        .catch(err =>{
            isValid("");
        })
        
        console.log(newUser);

    }

    return (
        <div className="login p-3">
            <section className="text-center ">

            <div className="p-5 bg-image image-or"></div>

            <div className="card mx-4 mx-md-5 shadow-5-strong image-st">
                <div className="card-body py-5 px-md-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                    <h2 className="fw-bold mb-5">دانشگاه ولی عصر (عج)</h2>
                    <form onSubmit={login}>
                        
                         {/* Email input  */}
                        <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example3">
                            User name
                        </label>
                        <input type="text" id="form3Example3" name="username" className="form-control" onChange={inputHandler}/>
                        </div>

                        {/* Password input */}
                        <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example4">
                            Password
                        </label>
                        <input type="password" id="form3Example4" name="pass" className="form-control" onChange={inputHandler}/>
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="btn btn-secondary btn-block mb-2">
                        ورود
                        </button>
                        {
                            !value 
                            ? (
                                <h4 className="dangar">نامعتبر</h4>
                            )
                            : ""
                        }
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </section>
  
        </div>
    )
}

export default Login;