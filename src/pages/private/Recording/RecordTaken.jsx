import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, Nav } from "react-bootstrap";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import { Supabase } from "../../../components/logic/Supabase";
export default function FullMedRecording() {
	const [dateValue, changeDate] = useState(new Date());
	const [timeValue, changeTime] = useState(new Date());

	let navigate = useNavigate();
	const { medicationId } = useParams();

	function TestSubmit(e) {
		e.preventDefault();
		let error = { message: "working" };
		const user = Supabase.auth.user();
		console.log(dateValue, timeValue, user.id, medicationId);
		!error ? navigate("/account", { replace: true }) : alert(error.message);
	}

	async function HandleSubmit() {
		const user = Supabase.auth.user();

		const { data, error } = await Supabase.from("dosage_history").insert([
			{ id: medicationId, user_taken_id: user.id, date_taken: dateValue, time_taken: timeValue, skipped: false },
		]);
	}

	return (
		<Container fluid>
			<Nav.Link as={Link} to="/account">
				&lt; Back
			</Nav.Link>
			<p>lets report what we doook</p>
			<Form method="post" onSubmit={TestSubmit}>
				<Form.Group>
					<Form.Label>Date</Form.Label> <br />
					<DatePicker onChange={changeDate} value={dateValue} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Time</Form.Label> <br />
					<TimePicker onChange={changeTime} value={timeValue} disableClock="True" format="hh:mm a" />
				</Form.Group>{" "}
				<br />
				<Button type="submit">Submit</Button>
			</Form>
		</Container>
	);
}
