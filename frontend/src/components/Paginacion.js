import React, {Fragment, useEffect, useState} from 'react';
import '../assets/css/Paginacion.css';
//import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import VehicleCard from './VehicleCard.js';


const Paginacion = () => {

    var datos = [];
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)
    const [total, setTotal] = useState(2)
    
    useEffect(() => {
      fetchPosts();
    }, [pageNumber]);

    const fetchPosts = async () => {
      const cont = pageNumber + 1
      const url = `http://127.0.0.1:8000/?page=${cont}`
      fetch(url)
      .then(response => response.json())
      .then(data => datos = data)
      .then(function(myJson) {
        setUsers(myJson)
      });
    }
    //const dat = JSON.parse(datos)



    const usersPerPage = 3
    const pagesVisited = pageNumber * usersPerPage
    const displayUsers = users
      .map((user) => {
        
        return(
          <div className="tarjeta">
            <VehicleCard name="hola que tal amigos" brand = {user.brand} model = {user.model} price = {user.price}
              year = {user.year} transmi = {user.transmi} city = {user.city}/>
          </div>
        );
        })
  
      const pageCount = Math.ceil( 18 / usersPerPage);
      const changePage = ({selected}) => {
        setPageNumber(selected);
        fetchPosts();
        setTotal(Math.ceil( users[0].num / usersPerPage ) )
      };
  
    return (
      <Fragment>
          <div className="tarjetas">
            {displayUsers}
          </div>
        <ReactPaginate
          previousLabel = {"Anterior"}
          nextLabel = {"Siguiente"}
          pageCount = {total}
          onPageChange = {changePage}
          containerClassName = {"paginacion-contenedor"}
          pageClassName = {"paginacion-paginas"}
          activeClassName = {"paginacion-activa"}
          previousClassName = {"paginacion-anterior"}
          nextClassName = {"paginacion-siguiente"}
        />
      </Fragment>
    );

}

export default Paginacion;