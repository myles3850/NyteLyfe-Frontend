import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import { Supabase } from "../../../components/logic/Supabase";

export default function FullMedRecording() {
	const [dateValue, changeDate] = useState(new Date());
	const [timeValue, changeTime] = useState(new Date());
	const [skipped, setSkipped] = useState(false);

	const navigate = useNavigate();
	const { medicationId } = useParams();

	async function HandleSubmit(e) {
		e.preventDefault();
		const user = Supabase.auth.user();
		console.log(e);

		const { data, error } = await Supabase.from("dosage_history").insert([
			{ medication_taken_id: medicationId, date_taken: dateValue, time_taken: timeValue, skipped: skipped },
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
						<DatePicker onChange={changeDate} value={dateValue} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Time</Form.Label> <br />
						<TimePicker onChange={changeTime} value={timeValue} disableClock="True" format="hh:mm a" />
					</Form.Group>
					<br />
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		</Container>
	);
}
