import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination.js";
import Posts from "../components/Posts.js";
import SearchBar from "../components/SearchBar.js";
import SortBar from "../components/SortBar.js";

function Home() {
	const [posts, setPosts] = useState([]);
	// const [currentPage, setCurrentPage] = useState(1);
	// const [postsPerPage, setPostsPerPage] = useState(4);

	const [search, setSearch] = useState("");
	const [searchBy, setSearchBy] = useState("neighborhood");
	const [sortBy, setSortBy] = useState("price");

	// get the posts from the backend
	const getPosts = async () => {
		try {
			const _posts = await fetch("/api/posts").then((res) => res.json());
			setPosts(_posts);
		} catch (err) {
			console.log("error ", err);
		}
	};

	// we can not use async to pass in to useEffect
	useEffect(() => {
		getPosts();
	}, []);

	function handleSearchChange(evt) {
		setSearch(evt.target.value);
	}

	function handleSearchByChange(evt) {
		setSearchBy(evt.target.value);
	}

	function handleSortByChange(evt) {
		setSortBy(evt.target.value);
	}

	// const processPosts = () => {
	// 	console.log(posts);
	// 	setPosts(
	// 		posts
	// 			.map(
	// 				(p) =>
	// 					(p.images = p.images.map(function (img) {
	// 						img = img.replace("50x50c", "600x450");
	// 						return img;
	// 					}))
	// 			)
	// 			.filter((p) => {
	// 				if (search === "") {
	// 					return true;
	// 				}
	// 				if (!p[searchBy]) {
	// 					return false;
	// 				}
	// 				return p[searchBy]
	// 					.replace(",", "")
	// 					.toLowerCase()
	// 					.includes(search.toLowerCase());
	// 			})
	// 			.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
	// 	);

	// took out the () in location
	// props.posts.map((p) => (p = p.location.replace("(", "")));
	// };

	// Get current posts
	// const indexOfLastPost = currentPage * postsPerPage;
	// const indexOfFirstPost = indexOfLastPost - postsPerPage;
	// const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// // Change page
	// const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

	// if (Object.keys(posts).length > 0) {
	// 	processPosts();
	// }

	return (
		<div>
			<SearchBar
				handleSearchChange={handleSearchChange}
				handleSearchByChange={handleSearchByChange}
				searchBy={searchBy}
				search={search}
			></SearchBar>
			<SortBar
				handleSortByChange={handleSortByChange}
				sortBy={sortBy}
			></SortBar>
			<br />
			<h1>Find your next home! </h1>
			<Posts posts={posts}></Posts>

			<footer>Here is a footer</footer>
		</div>
	);
}

export default Home;

// <Pagination
// postsPerPage={postsPerPage}
// totalPosts={posts.length}
// handlePageClick={handlePageClick}
// ></Pagination>
