import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

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

  const [student, setStudent] = useState(
    {
      counter : 0,

    }
  )

  let counterPlus = () => setStudent(

    
    {
      ...student,
      counter : (student.counter + 1),
    }
  )

  

  return (
      <div className="app">
        <Header />

        <StuContext.Provider value={{
          student : student,
          plus : counterPlus,
        }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/room" component={Room} />
            <Route path="*" component={Notfound} />
          </Switch>
        </StuContext.Provider>

      </div>
  );
}

export default App;
