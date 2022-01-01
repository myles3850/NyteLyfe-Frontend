import classes from "./MedCard.module.css";

function MedCard() {
	return (
		<div className={classes.card}>
			<h4>Medication Name</h4>
			<div className={classes.container}>
				<p>Dosage</p>
				<p>Fewquency</p>
				<p>last taken</p>
			</div>
		</div>
	);
}

export default MedCard;
