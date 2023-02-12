import React from 'react';

export interface ReasonForSparingProps {
	reasonForSparing: string;
	onChange: (newValue:string) => void;
}

	const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChange}) => (
		<>
			<label htmlFor='reasonForSparing' >Reason For Sparing</label>
			<textarea id='reasonForSparing' value={reasonForSparing} onChange={(e)=>onChange(e.target.value)} rows={5}
          cols={100} />
		</>);

	export default ReasonForSparing;
