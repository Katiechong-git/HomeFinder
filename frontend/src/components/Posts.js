import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// post component takes care of filtering based on search hook and renders the resultig post
function Posts(props) {
  // rendering each post in posts array into a list item
  const renderPosts = () => {
    return props.posts.map((p) => (
      <Card key={p._id} bg="light">
        <Card.Img variant="top" src={p.images[0]} alt="image of the house" />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <label htmlFor="price">
            {" "}
            <ListGroup.Item>Price: {p.price}</ListGroup.Item>
          </label>
          <label htmlFor="neighborhood">
            <ListGroup.Item>Neighborhood: {p.neighborhood}</ListGroup.Item>
          </label>{" "}
          <label htmlFor="address">
            <ListGroup.Item>Address: {p.address}</ListGroup.Item>
          </label>
          <ListGroup.Item>
            <Link to={`/posts/${p._id}`}>
              <Button variant="light">
                Click me to see more details about this house! ❤️
              </Button>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    ));
  };

  return <CardColumns role="main">{renderPosts()}</CardColumns>;
}

// make sure that an array of posts is pass in as props for Posts function
Posts.propTypes = {
  posts: PropTypes.func.isRequired,
};

export default Posts;
