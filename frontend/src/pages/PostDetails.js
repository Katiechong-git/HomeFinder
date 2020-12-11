import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ReactHtmlParser from "react-html-parser";
import Carousel from "react-bootstrap/Carousel";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { EmailShareButton, EmailIcon } from "react-share";
import { useParams } from "react-router-dom";

function PostDetails() {
	const postId = useParams().postId;

	// const url = window.location.href;
	const url = "https://sfbay.craigslist.org/";

	console.log(url);
	const [post, setPost] = useState({});
	const html = post.postingbody;

	// get the posts from the backend
	const getPost = async () => {
		try {
			const _post = await fetch(`/api/posts/${postId}`).then((res) =>
				res.json()
			);
			setPost(_post);
		} catch (err) {
			console.log("error ", err);
		}
	};

	// load the database and clean up on server side
	useEffect(() => {
		getPost();
	}, []);

	return (
		<Card>
			<Card.Header>
				<Card.Title>{post.title}</Card.Title>
			</Card.Header>
			<Card.Body>
				<div>
					<Carousel>
						{Object.keys(post).length > 0
							? post.images
									.map(function (img) {
										img = img.replace("50x50c", "600x450");
										return img;
									})
									.map((img) => {
										return (
											<Carousel.Item>
												<img
													className="d-block w-100"
													src={img}
													alt="First slide"
												/>
											</Carousel.Item>
										);
									})
							: null}
					</Carousel>
				</div>
				<p>{ReactHtmlParser(html)}</p>
			</Card.Body>
			<Card.Footer>
				Share this page with my friends! 😍
				<FacebookShareButton url={url}>
					<FacebookIcon size={36} />
				</FacebookShareButton>
				<WhatsappShareButton url={url}>
					<WhatsappIcon size={36} />
				</WhatsappShareButton>
				<EmailShareButton url={url}>
					<EmailIcon size={36} />
				</EmailShareButton>
			</Card.Footer>
		</Card>
	);
}

export default PostDetails;
