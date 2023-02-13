import React from 'react';

interface SubmittedDataProps {
	submitted: boolean;
	speciesName: string;
	planetName: string;
	numberOfBeings: number;
	twoPlusTwo: string;
	reasonForSparing: string;
}

const SubmittedData: React.FC<SubmittedDataProps> = (props) => {
	console.log("submitted =>", props.submitted);

	if (props.submitted) {
		return (<>
			<section>
				<h4> Submitted Data:</h4>
				<p>Submitted Species Name: {props.speciesName}</p>
				<p>Submitted Planet Name: {props.planetName}</p>
				<p>Submitted Number Of Beings: {props.numberOfBeings}</p>
				<p>Submitted what is 2+2?: {props.twoPlusTwo}</p>
				<p>Submitted Reason For Sparing: {props.reasonForSparing}</p>
			</section>

		</>)
	}
	else {
		return (<></>)
	}

}
export default SubmittedData;
