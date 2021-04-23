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
import { useState } from 'react';


const Styles = styled.div`
  .App {
    display: flex;
    align-items: left;
  }
  .wrapper {
    margin-top: 20vh;
    width: 35%;
  }
`;


//App.js
function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0)
  //fetch('http://127.0.0.1:8000/cars/')
  //.then(response => response.json())
  //.then(data => console.log(data));

  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return(
        <div className="user">
          <h3>{user.Make}</h3>
          <h3>{user.Model}</h3>
          <h3>{user.ModelY}</h3>
        </div>
      );
    })

    const pageCount = Math.ceil(usersPerPage);
    const changePage = ({selected}) => {
      setPageNumber(selected);
    };

  return (

    <div className="App">
      {displayUsers}
      <Styles>
        <div className="App">
          <div className="wrapper">
            <h2>Maximo</h2>
            <FiltroPrecio color="#0074D9" />
            <h2>Minimo</h2>
            <FiltroPrecio color="#3D9970" />
            <h2>Kilometraje maximo</h2>
            <Kilometraje color="#0074D9" />
            <h2>Kilometraje minimo</h2>
            <Kilometraje color="#3D9970" />
          </div>
        </div>
      </Styles>
      <Reactpagine
        previousLabel = {"Anterior"}
        nextLabel = {"Siguiente"}
        pageCount = {pageCount}
        onPageChange = {changePage}
        containerClassName = {"paginationBttns"}
        previousLinkClassName = {"previusBttn"}
        nextLinkClassName = {"nextBttn"}
        disabledClassName = {"paginationDisabled"}
        activeClassName = {"paginationActivate"}
      />
    </div>
  );
}

export default App;



//<header className="App-header">
//<h1> Frontend </h1>
//<br/>
//<Formulario/>
//<br/>
//<Maker_model/>
//<br/>
//<By_Year/>
//<br/>
//<h1>Vehicle Card</h1>
// <VehicleCard/>
//<br/>
// </header>