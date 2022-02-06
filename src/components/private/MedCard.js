import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./MedCard.module.css";

function MedCard(prop) {
	let navigate = useNavigate();

	function handleQuickSubmit() {}

	return (
			<Card style={{ margin:'10px', width: "18rem" }} bg="light">
				<Card.Body onClick={() => navigate(`${prop.medication.id}`)}>
					<Card.Title>{prop.medication.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{prop.medication.dose}</Card.Subtitle>
					<Card.Text>
						<p>{prop.medication.frequency}</p>
						<p>{prop.medication.notes}</p>
						<p>TAKEN</p>
					</Card.Text>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
	);
}

export default MedCard;
