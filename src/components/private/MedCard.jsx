import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Supabase } from "../logic/Supabase";

function MedCard(prop) {
	let navigate = useNavigate();

	async function handleQuickSubmit() {
		const error = await Supabase.from("dosage_history").insert([
			{ medication_taken_id: prop.medication.id, time_taken: "otherValue" },
		]);
		console.log(error);
	}

	return (
		<Card style={{ margin: "10px", width: "18rem" }} bg="light">
			<Card.Body onClick={() => navigate(`${prop.medication.id}`)}>
				<Card.Title>{prop.medication.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{prop.medication.dose}</Card.Subtitle>
				<Card.Text>{prop.medication.frequency}</Card.Text>
				<Card.Text>{prop.medication.notes}</Card.Text>
				<Card.Text>TAKEN</Card.Text>
				<Card.Link onClick={handleQuickSubmit}>taken</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default MedCard;
