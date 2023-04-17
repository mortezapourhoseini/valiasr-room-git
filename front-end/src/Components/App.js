import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//components
import Header from "./Header";
import Room from "./Router/Room";
import Home from "./Router/Home";
import Notfound from "./Router/Notfound";

//context
import StuContext from "./Context/StuContext";

//css
import "./style/App.css";

function App() {
  const [student, setStudent] = useState({
    counter: 0,
  });

  let counterPlus = () =>
    setStudent({
      ...student,
      counter: student.counter + 1,
    });

  return (
    <div className="app">
      <Header />

      <StuContext.Provider
        value={{
          student: student,
          plus: counterPlus,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </StuContext.Provider>
    </div>
  );
}

export default App;
