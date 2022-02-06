import { useNavigate } from "react-router-dom";
import { Supabase } from "../../components/logic/Supabase";
import { Button, CardGroup, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";


import MedCard from "../../components/private/MedCard";



function AccountHome() {
	const [data, setData] = useState([]);
	let navigate = useNavigate();

	useEffect(() => {
		readData();
	}, []);

	async function readData() {
		const { data: Data } = await Supabase.from("Medication").select("*");
		setData(Data);
	}

	return (
		<div className="account_section">
			<div>
				<h3>Account Home page</h3>
				<p>
					this page will contain links and infomration on quick stats for your medication as well as a way to
					quickly mark them as taken
				</p>
				<Container fluid className="text-center">
					<Row xs={1} md={2} className="g-4" className="justify-content-md-center">
						{data.map((Medication) => {
							return <MedCard key={Medication.id} medication={Medication} />;
						})}
					</Row>
					<br />
					<Button className="center" onClick={() => navigate("new")}>
						Add medication
					</Button>
				</Container>
			</div>
		</div>
	);
}

export default AccountHome;
