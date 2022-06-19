import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Supabase } from "../../../components/logic/Supabase";

function Medication() {
	
	const [data, setData] = useState([]);

	useEffect(() => {
		async function ReadData() {
			let params = useParams();
			const { data: Data } = await Supabase.from("Medication").select("*").eq("id", params.medicationId);
			setData(Data[0]);
		}
		ReadData();
	}, []);


	return (
		<div>
			<p>this is a single mnedication</p>
			<p>you are looking at Medication: {data.name}</p>
		</div>
	);
}

export default Medication;
