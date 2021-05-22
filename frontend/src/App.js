import React from "react";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Maker_model from "./components/Maker_model";
import By_Year from "./components/By_Year";
import By_Price from "./components/By_Price";
import VehicleCard from "./components/VehicleCard";
import By_Km from "./components/By_Km";
import By_Color from "./components/By_Color";
import Paginacion from "./components/Paginacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Formulario from "./components/Formulario";


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path = "/" exact component={()=><Home/>}/>
          <Route path = "/VehicleCard" exact component={()=><By_Year/>}/>
          <Route path = "/Formulario" exact component={()=><Formulario/>}/>
          <Route path = "/Paginacion" exact component={()=><Paginacion/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
