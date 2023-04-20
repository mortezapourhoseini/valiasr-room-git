import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

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

  if(localStorage.getItem('counter') == null)
  {
    localStorage.setItem("counter", 0);
  }

  let newCounter = parseInt(localStorage.getItem('counter'));

  const [student, setStudent] = useState({
    username : '',
    pass : '',
    counter : newCounter
  });

  let addUser = (name, value) =>{
    setStudent(
      {
        ...student,
        [name] : value,
      }
    )
  }


  let counterPlus = () =>{
    
    let newCounter = student.counter + 1;

    localStorage.setItem('counter', newCounter);
    
    setStudent(
      {
        ...student,
        counter : newCounter,
      }
    );
    
  }
    
 
  return (
    <div className="app">
      <Header />

      <StuContext.Provider
        value={{
          student : student,
          counter: student.counter,
          addUser : addUser,
          plus: counterPlus,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </StuContext.Provider>
    </div>
  );
}

export default App;
