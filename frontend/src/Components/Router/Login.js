import React, { useState } from "react";
import "../style/login.css";
import api from "../Api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { username, password };
    localStorage.setItem("user", username);
    try {
      const response = await api.post("/api/auth/", user);
      api.defaults.withCredentials = true;
      api.defaults.headers.Authorization = `Bearer ${response.data.access}`;
      navigate("/");
    } catch (error) {
      localStorage.setItem("access_token", "");
      localStorage.setItem("refresh_token", "");
      delete api.defaults.headers["Authorization"];
      console.log(error);
    }
  };

  return (
    <div className="login p-3">
      <section className="text-center ">
        <div className="p-5 bg-image image-or"></div>

        <div className="card mx-4 mx-md-5 shadow-5-strong image-st">
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">دانشگاه ولی عصر (عج)</h2>
                <form onSubmit={handleSubmit}>
                  {/* username input  */}
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">
                      User name
                    </label>
                    <input
                      type="text"
                      required
                      id="form3Example3"
                      name="username"
                      className="form-control"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" required for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      name="password"
                      className="form-control"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block mb-2"
                  >
                    ورود
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
