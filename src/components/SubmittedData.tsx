import React from 'react';

interface SubmittedDataProps {
	submitted: boolean;
	speciesName: string;
	planetName: string;
	numberOfBeings: string;
	twoPlusTwo: string;
	reasonForSparing: string;
}

const SubmittedData: React.FC<SubmittedDataProps> = (props) => {
	console.log("submitted =>", props.submitted);

	if (props.submitted) {
		return (<>
			<section>
				<h4> Submitted Data:</h4>
				<p>{props.speciesName}</p>
				<p>{props.planetName}</p>
				<p>{props.numberOfBeings}</p>
				<p>{props.twoPlusTwo}</p>
				<p>{props.reasonForSparing}</p>
			</section>

		</>)
	}
	else {
		return (<></>)
	}

}
export default SubmittedData;
