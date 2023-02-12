import React from 'react';

export interface NumberOfBeingsProps {
	numberOfBeings: number;
	onChange: (newValue:number) => void;
}

	const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChange }) => (
		<>
			<label htmlFor='NumberOfBeings'>Number of Beings</label>
			<input id='NumberOfBeings' type='number' value={numberOfBeings} onChange={(e)=>onChange(e.target.valueAsNumber)} />
		</>);

	export default NumberOfBeings;
