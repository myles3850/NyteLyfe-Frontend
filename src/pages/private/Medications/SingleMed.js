import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Supabase } from "../../../components/logic/Supabase";

function Medication() {
	let params = useParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		readData(params.medicationId);
	}, []);

	async function readData(calledMed) {
		const { data: Data } = await Supabase.from("Medication").select("*").eq('id', calledMed);
		setData(Data);
	}

	return (
		<div>
			<p>this is a single mnedication</p>
			<p>you are looking at Medication: {data.name}</p>
		</div>
	);
}

export default Medication;
