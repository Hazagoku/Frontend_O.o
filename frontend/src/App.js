import './App.css';
import JsonData from "./MOCK_DATA.json";
import styled from 'styled-components';
import Reactpagine from "react-paginate";
import Formulario from './components/Formulario.js';
import VehicleCard from './components/VehicleCard.js';
import Maker_model from './components/Maker_model.js';
import CheckBox_MM from './components/CheckBox_MM.js';
import By_Year from "./components/By_Year";
import FiltroPrecio from './components/FiltroPrecio.js';
import Kilometraje from './components/Kilometraje.js';
import Paginacion from './components/Paginacion.js';
import By_Color from "./components/By_Color";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


const Styles = styled.div`
  .App {
    margin-top: 2vh;
    display: flex;
    justify-content: space-around;
  }
  .wrapper {
    margin-left: 2vh;
    width: 20%;
  }
  .paginas {
    margin-right: 2vh;
    width: 70%
  }
`;


//App.js
function App() {
  return (
    
    <Router>
      
      <div className = "Contenedor">
        <div className = "btn-group">
        <big><b>KAVAK</b></big>
          <Link to = "/" className = "btn-dark">
            Inicio
          </Link>
          <Link to = "/Agregar" className = "btn-dark">
            Agregar
          </Link>
          <Link to = "/Ver" className = "btn-dark">
            Ver
          </Link>
          <Link to = "/tarjeta" className = "btn-dark">
            tarjeta
          </Link>
          
        </div>
        <Switch>
        <Route path = "/tarjeta" exact>
          <VehicleCard></VehicleCard>
          </Route>
          <Route path = "/" exact>
            Inicio de la pagina
            <Maker_model></Maker_model>
          </Route>
          <Route path = "/Agregar">
            
            <Formulario></Formulario>
          </Route>
          <Route path = "/ver" exact>
            <p>.</p>
            <Paginacion></Paginacion>
          </Route>
        </Switch>
      </div>
    </Router>

    //<div className="App">
      //<h1>KAVAK</h1>
      //<Styles>
        //<div className="App">
          //<div className="wrapper">
            //<Formulario/>
            //<br/>
           // <Maker_model/>
            //<br/>
           // <By_Year/>
           // <br/>
           // <h2>Vehicle Card</h2>
            //<VehicleCard/>
            //<br/>
            //<h3>Maximo</h3>
            //<FiltroPrecio color="#0074D9" />
           // <h3>Minimo</h3>
           // <FiltroPrecio color="#3D9970" />
           // <h3>Kilometraje maximo</h3>
           // <Kilometraje color="#0074D9" />
            //<h3>Kilometraje minimo</h3>
            //<Kilometraje color="#3D9970" />
            //<By_Color/>
          //</div>
         // <div className="paginas">
           // <Paginacion></Paginacion>
         // </div>
        //</div>
      //</Styles>
      
    //</div>
  );
}

export default App;
