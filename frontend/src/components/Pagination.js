import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
	return (
		<ReactPaginate
			previousLabel={"<- Previous"}
			nextLabel={"Next ->"}
			pageCount={Math.ceil(props.totalPosts / props.postsPerPage)}
			pageRangeDisplayed={10}
			marginPagesDisplayed={10}
			onPageChange={props.handlePageClick}
			containerClassName="pagination-container"
			pageClassName="pagination-li"
			pageLinkClassName="pagination-a"
		></ReactPaginate>
	);
};

export default Pagination;
