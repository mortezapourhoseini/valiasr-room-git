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

  const [valid, setValid] = useState(false);

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

  let permis = token =>{
    if (token.lentgh != 0)
    {
      setValid(true);
    }
    else
    {
      setValid(false);
    }
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
          isValid : permis,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login value={true}/>} />
            {
              valid 
              ? (
                 <Route path="/home" element={<Home />} >
                  <Route path="/room" element={<Room />} />
                  <Route path="*" element={<Notfound />} />
                </Route>
              )
              : (
                <Route path="*" element={<Login value={false}/>} />
              )
            }
           
            
          </Routes>
        </BrowserRouter>
      </StuContext.Provider>
    </div>
  );
}

export default App;
