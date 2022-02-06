import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Supabase } from "../logic/Supabase";
import classes from "./MedCard.module.css";

function MedCard(prop) {
	let navigate = useNavigate();

	async function handleQuickSubmit() {
		const { data, error } = await Supabase.from("dosage_history").insert([
			{ medication_taken_id: prop.medication.id, time_taken: "otherValue" },
		]);
	}

	return (
		<Card style={{ margin: "10px", width: "18rem" }} bg="light">
			<Card.Body onClick={() => navigate(`${prop.medication.id}`)}>
				<Card.Title>{prop.medication.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{prop.medication.dose}</Card.Subtitle>
				<Card.Text>
					<p>{prop.medication.frequency}</p>
					<p>{prop.medication.notes}</p>
					<p>TAKEN</p>
				</Card.Text>
				<Card.Link href="#">taken</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default MedCard;
