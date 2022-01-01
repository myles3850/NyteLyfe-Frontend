import classes from "./MedCard.module.css";

function MedCard(prop) {

	

	return (
		<div className={classes.card}>
			<h4>Medication Name</h4>
			<div className={classes.container}>
				<p>{prop.medication.dose}</p>
				<p>Fewquency</p>
				<p>last taken</p>
			</div>
		</div>
	);
}

export default MedCard;
