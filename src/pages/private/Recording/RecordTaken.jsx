import { Container, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FullMedRecording() {
	return (
		<Container fluid>
		<Nav.Link as={Link} to='/account'> &lt; Back </Nav.Link>
			<p>lets report what we doook</p>
			<Form>
				<Form.Group>
					<Form.Label>Date</Form.Label>
				</Form.Group>
			</Form>
		</Container>
	);
}
