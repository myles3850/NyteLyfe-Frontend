import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

function Home() {
	const supabaseUrl = "https://mojptfpacmyjglncbykp.supabase.co";
	const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

	const supabase = createClient(supabaseUrl, supabaseKey);

	const UUID = "20cf2574-ec52-4f61-a0b9-841769a31aa0";

	const [user, Setuser] = useState(10);

	async function readData() {
		let { data: Medication, error } = await supabase
			.from("Medication")
			.select("*");
		console.log(Medication);
	}

	async function updateData(user) {
		const { data, error } = await supabase
			.from("Medication")
			.insert([{ linked_user: UUID, dose: user }]);
		Setuser++;
	}

	return (
		<div>
			<h1>Pill Poppers Website</h1>
			<button onClick={readData}>press to add data to DB</button>
			<p>
				Welcome to my new pill management page, here i will be managing
				the pills i've taken in a format that works for those that say
				up late my ultimate plan for this is going to be a easy place
				for anyone who works or lives in the night. it will be a place
				that you cans et your won endin day and from there manaeg pill
				show you want to instead of how society thinks we should
			</p>
		</div>
	);
}

export default Home;
