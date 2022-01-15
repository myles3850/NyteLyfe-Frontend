import { useEffect, useState } from "react";
import { Supabase } from "../../components/logic/Supabase";
import MedCard from "../../components/private/MedCard";

function Medications() {
	const [data, setData] = useState([]);
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
			})}
		</div>
	);
}

export default Medications;
