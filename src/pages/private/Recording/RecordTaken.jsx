import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { Supabase } from "../../../components/logic/Supabase";

export default function FullMedRecording() {
	const [dateValue, changeDate] = useState(new Date());
	const [timeValue, changeTime] = useState('00:01');
	const [state, setState] = useState({});

	const navigate = useNavigate();
	const { medicationId } = useParams();

	const handleToggle = ({ target }) => setState((s) => ({ ...s, [target.name]: !s[target.name] }));

	async function HandleSubmit(e) {
		e.preventDefault();
		const user = Supabase.auth.user();

		const { data, error } = await Supabase.from("dosage_history").insert([
			{ medication_taken_id: medicationId, date_taken: dateValue, time_taken: timeValue, skipped: state.skipped },
		]);
		!error ? navigate("/account", { replace: true }) : alert(error.message);
	}

	return (
		<Container fluid>
			<Button
				onClick={() => {
					navigate("/account");
				}}
			>
				&lt; Back
			</Button>
			<Container fluid className="text-center">
				<p>lets report what we doook</p>
				<Form method="post" onSubmit={HandleSubmit}>
					<Form.Group>
						<Form.Label>Date</Form.Label> <br />
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Time</Form.Label> <br />
					</Form.Group>
					<br />
					<Form.Group>
						<Form.Label>Skipped This Dose</Form.Label> <br />
						<Form.Check name="skipped" onChange={handleToggle} />
					</Form.Group>
					<br />
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		</Container>
	);
}
