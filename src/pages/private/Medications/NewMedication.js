import { useState } from "react";
import { Supabase } from "../../../components/logic/Supabase";
import HandleErrorCheck from "../../../components/logic/ValidationCheck";

function AddMedication() {
	const [medData, setMedData] = useState({});

	const handleChanges = (event) => {
		let name = event.target.id;
		let value = event.target.value;
		setMedData((values) => ({ ...values, [name]: value }));
	};

	async function handleSubmit(event) {
		event.preventDefault();
		const { data, error } = await Supabase.from("Medication").insert([
			{
				name: medData.name,
				dose: medData.dosage,
				frequency: medData.frequency,
				notes: medData.notes,
			},
		]);
		console.log(data, error);
	}

	return (
		<div className="newMedicationForm">
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input id="name" type="text" onChange={handleChanges} />
				</label>
				<label>
					Dosage:
					<input id="dosage" type="text" onChange={handleChanges} />
				</label>
				<label>
					frequency:
					<input id="frequency" type="text" onChange={handleChanges} />
				</label>
				<label>
					Notes:
					<input id="notes" type="text" onChange={handleChanges} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default AddMedication;
