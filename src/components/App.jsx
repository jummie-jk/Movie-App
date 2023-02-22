import React from "react";
import Header from "../components/Header";
import Searchmovies from "./Searchmovies";
import Homepage from "./homepage";

function App(){
    return <div className="container">
    <Header/>
    <Searchmovies/>
    <Homepage/>
    </div> 
}

export default App;