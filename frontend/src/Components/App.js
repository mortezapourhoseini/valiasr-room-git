import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//components
import Header from "./Header";
import Room from "./Router/Room";
import Home from "./Router/Home";
import Login from "./Router/Login";
import Notfound from "./Router/Notfound";

//context
import StuContext from "./Context/StuContext";

//css
import "./style/App.css";

function App() {

  if (localStorage.getItem("counter") == null) {
    localStorage.setItem("counter", 0);
  }

  let newCounter = parseInt(localStorage.getItem("counter"));

  const [student, setStudent] = useState({
    username: localStorage.getItem("user"),
    counter: newCounter,
  });

  let counterPlus = () => {
    let newCounter = student.counter + 1;

    localStorage.setItem("counter", newCounter);

    setStudent({
      username: localStorage.getItem("user"),
      counter: newCounter,
    });
  };


  return (
    <div className="app">
      <Header />
      <StuContext.Provider
        value={{
          student : student,
          plus: counterPlus,
        }}>

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>

      </StuContext.Provider>
      
    </div>
  );
}

export default App;
