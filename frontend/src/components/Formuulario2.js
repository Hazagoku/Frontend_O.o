import React, {Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";


const PER_PAGE = 10;

const Formuulario2 = () => {
    var datos = [];
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [tam, setTam] = useState(0)

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    const cont = currentPage + 1
    const url = `http://127.0.0.1:8000/?page=${cont}`

    fetch(url)
    .then(response => response.json())
    .then(data => datos = data)
    .then(function(myJson) {
      console.log(myJson);
      setData(myJson)
    });
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    fetchPosts();
    console.log(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
  .map((user) => {
    return(
      <div className="tarjeta">
        <p>{user.km}</p>
      </div>
    );
    })

  const pageCount = Math.ceil(8);

  return (
    <Fragment>
    <div className="App">
      <h1>React Paginate Example</h1>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      {currentPageData}
    </div>
    </Fragment>
  );
}

export default Formuulario2;