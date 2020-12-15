import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ReactHtmlParser from "react-html-parser";
import Carousel from "react-bootstrap/Carousel";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { EmailShareButton, EmailIcon } from "react-share";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function PostDetails() {
	const postId = useParams().postId;

	// const url = window.location.href;
	const url = "https://sfbay.craigslist.org/";

	console.log(url);
	const [post, setPost] = useState({});
	const [comment, setComment] = useState("");
	const html = post.postingbody;

	// get the posts from the backend
	const getPost = async () => {
		try {
			const _post = await fetch(`/api/posts/${postId}`).then((res) =>
				res.json()
			);
			console.log("post?", _post);
			setPost(_post);
		} catch (err) {
			console.log("error ", err);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("comment", comment);
		const response = await fetch(`/api/posts/post/${post._id}/comment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				comment,
			}), // body data type must match "Content-Type" header
		});
	};

	// load the database and clean up on server side
	useEffect(() => {
		getPost();
	}, []);

	return (
		<div role="main">
			<Card border="info">
				<h1>
					<Card.Header>{post.title}</Card.Header>
				</h1>
				<Card.Body>
					<div>
						<Carousel>
							{Object.keys(post).length > 0
								? post.images
										.map(function (img) {
											img = img.replace(
												"50x50c",
												"600x450"
											);
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
					Share this page with my friends! 😍{"  "}
					<FacebookShareButton url={url}>
						<FacebookIcon size={36} />
					</FacebookShareButton>
					{"  "}
					<WhatsappShareButton url={url}>
						<WhatsappIcon size={36} />
					</WhatsappShareButton>
					{"  "}
					<EmailShareButton url={url}>
						<EmailIcon size={36} />
					</EmailShareButton>
					<br />
					<br />
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicComment">
							<Form.Label>Comment</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								onChange={(evt) => setComment(evt.target.value)}
								value={comment}
							/>
						</Form.Group>
						<Button variant="outline-dark" type="submit">
							Submit
						</Button>
					</Form>
					{post.comments &&
						post.comments.map((comment) => (
							<Card.Body>
								<p>
									User @{comment.username} said "
									{comment.description}"
								</p>
							</Card.Body>
						))}
				</Card.Footer>
			</Card>
		</div>
	);
}

export default PostDetails;
