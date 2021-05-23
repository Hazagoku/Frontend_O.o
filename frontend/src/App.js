import React from "react";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Paginacion from "./components/Paginacion";
import Formulario from "./components/Formulario";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path = "/" exact component={()=><Home/>}/>
          <Route path = "/Formulario" exact component={()=><Formulario/>}/>
          <Route path = "/Paginacion" exact component={()=><Paginacion/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
