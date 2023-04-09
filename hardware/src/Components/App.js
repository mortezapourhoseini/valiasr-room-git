import React, { useState } from "react";

//import components
import Header from "./Header";
import Section from "./Section";
import Room from "./Room";

//import css
import "./style/App.css";
function App() {

    

    return(
        <div className="app">
            <Header />
                <main>
                    <Room />
                </main>
        </div>
    )
}

export default App;