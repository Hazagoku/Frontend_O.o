import React, {Fragment, useEffect, useState} from 'react';
//import './App.css';
//import JsonData from "./MOCK_DATA.json";
import Reactpagine from "react-paginate";


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
    const usersPerPage = 4
    const pagesVisited = pageNumber * usersPerPage
    const displayUsers = users
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((user) => {
        return(
          <div className="user">
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
        <div className="user">
        <h1>{displayUsers}</h1>
        </div>
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
      </Fragment>
    );

}

export default Paginacion;