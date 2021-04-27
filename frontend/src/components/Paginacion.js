import React, {Fragment, useEffect, useState} from 'react';
import '../assets/css/Paginacion.css';
//import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";


const Paginacion = () => {

    var datos = [];
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
      const fetchPosts = async () => {
      fetch('http://127.0.0.1:8000/cars/get',[])
      .then(response => response.json())
      .then(data => datos = data)
      .then(function(myJson) {
        console.log(myJson);
        setUsers(myJson)
        });
      }
      fetchPosts();
    }, []);
    
  
    //const dat = JSON.parse(datos)


      //console.log(data)
    const usersPerPage = 3
    const pagesVisited = pageNumber * usersPerPage
    const displayUsers = users
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((user) => {
        return(
          <div className="tarjeta">
            <p>{user.model}</p>
            <p>{user.brand}</p>
            <p>{user.year}</p>
            <p>{user.color}</p>
          </div>
        );
        })
  
      const pageCount = Math.ceil(usersPerPage);
      const changePage = ({selected}) => {
        setPageNumber(selected);
      };
  
    return (
      <Fragment>
          <div className="tarjetas">
            {displayUsers}
          </div>
        <ReactPaginate
          previousLabel = {"Anterior"}
          nextLabel = {"Siguiente"}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount = {pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
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