import { useNavigate } from "react-router-dom";
import classes from "./MedCard.module.css";

function MedCard(prop) {
let navigate = useNavigate();

	return (
		<div className={classes.card} onClick={() => navigate(`${prop.medication.id}`)}>
			<h4 className={classes.card_title}>{prop.medication.name}</h4>
			<div className={classes.container}>
				<p>{prop.medication.dose}</p>
				<p>{prop.medication.frequency}</p>
				<p>TAKEN</p>
			</div>
		</div>
	);
}

export default MedCard;
