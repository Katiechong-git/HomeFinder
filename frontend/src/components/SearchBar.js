import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

function SearchBar(props) {
	return (
		<Form.Group>
			<Form.Row className="align-items-center">
				<Form.Label
					className="mr-sm-2"
					htmlFor="inlineFormCustomSelect"
				>
					Search by...
				</Form.Label>
				<Col xs="auto">
					<Form.Control
						as="select"
						className="mr-sm-2"
						id="inlineFormCustomSelect"
						value={props.searchBy}
						onChange={props.handleSearchByChange}
						custom
					>
						<option value="neighborhood">Neighborhood</option>
						<option value="price">Price</option>
						<option value="address">Address</option>
					</Form.Control>
				</Col>

				<Col>
					<Form.Label
						htmlFor="inlineFormInputGroupSearch"
						srOnly
					></Form.Label>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text>🏠</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control
							id="inlineFormInputGroupSearch"
							placeholder={
								"What " +
								props.searchBy +
								" are you looking for?"
							}
							value={props.search}
							onChange={props.handleSearchChange}
						/>
					</InputGroup>
				</Col>
			</Form.Row>
		</Form.Group>
	);
}

export default SearchBar;
