import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
	return (
		<ReactPaginate
			pageCount={Math.ceil(props.totalPosts / props.postsPerPage)}
			pageRangeDisplayed={10}
			marginPagesDisplayed={10}
			onPageChange={props.handlePageClick}
			containerClassName="paginate-container"
			previousClassName="paginate-previous"
			nextClassName="paginate-next"
			pageClassName="paginate-page"
			pageLinkClassName="pagination-a"
			activeClassName="paginate-active"
			disabledClassName="paginate-disabled"
			role="navigation"
		></ReactPaginate>
	);
};

export default Pagination;
