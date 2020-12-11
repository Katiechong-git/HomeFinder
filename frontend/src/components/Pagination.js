import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  return <ReactPaginate 
  previousLabel={"<- Previous"} 
  nextLabel={"Next ->"} 
  pageCount={Math.ceil(props.totalPosts/props.postsPerPage)} 
  pageRangeDisplayed={10}
  marginPagesDisplayed={10}
  onPageChange={props.handlePageClick}></ReactPaginate>;
};

export default Pagination;
