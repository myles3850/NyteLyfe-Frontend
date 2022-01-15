import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Supabase } from "../../components/logic/Supabase";
import MedCard from "../../components/private/MedCard";

function Medications() {
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
		<div>
			<h2>Medication List</h2>
			{data.map((Medication) => {
				return <MedCard key={Medication.id} medication={Medication} />;
			})} <br/>
			<button onClick={() => navigate("new")}>Add medication</button>
		</div>
	);
}

export default Medications;
