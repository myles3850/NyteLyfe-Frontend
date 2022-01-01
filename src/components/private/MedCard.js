import classes from "./MedCard.module.css";

function MedCard(prop) {



	return (
		<div className={classes.card}>
			<h4 className={classes.card_title}>{prop.medication.name}</h4>
			<div className={classes.container}>
				<p>{prop.medication.dose}</p>
				<p>{prop.medication.frequency}</p>
				<p>last taken</p>
			</div>
		</div>
	);
}

export default MedCard;
