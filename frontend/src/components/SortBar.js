import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function SearchBar(props) {
	return (
		<Form.Group>
			<Form.Row className="align-items-center">
				<Form.Label
					className="mr-sm-2"
					htmlFor="inlineFormCustomSelect"
				>
					Or you can sort by...
				</Form.Label>
				<Col xs="auto">
					<Form.Control
						as="select"
						className="mr-sm-2"
						id="inlineFormCustomSelect"
						value={props.sortBy}
						onChange={props.handleSortByChange}
						custom
					>
						<option value="date">Date posted (most recent)</option>
						<option value="price">Price</option>
					</Form.Control>
				</Col>
			</Form.Row>
		</Form.Group>
	);
}

export default SearchBar;
