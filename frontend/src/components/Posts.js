import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardColumns from "react-bootstrap/CardColumns";

import { Link } from "react-router-dom";

// post component takes care of filtering based on search hook and renders the resultig post
function Posts(props) {
  // rendering each post in posts array into a list item
  const renderPosts = () => {
    return props.posts.map((p) => (
      <Card key={p._id}>
        <Card.Img variant="top" src={p.images[0]} />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: {p.price}</ListGroup.Item>
          <ListGroup.Item>Neighborhood: {p.neighborhood}</ListGroup.Item>
          <ListGroup.Item>Address: {p.address}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`/posts/${p._id}`}>Click me to see more details! ❤️</Link>
        </Card.Body>
      </Card>
    ));
  };

  return <CardColumns>{renderPosts()}</CardColumns>;
}

// make sure that an array of posts is pass in as props for Posts function
Posts.propTypes = {
  posts: PropTypes.func.isRequired,
};

export default Posts;
