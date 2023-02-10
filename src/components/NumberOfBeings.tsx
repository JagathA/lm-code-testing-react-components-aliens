import React from 'react';

interface NumberOfBeingsProps {
	numberOfBeings: string;
	onChange: (newValue:string) => void;
}

	const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChange }) => (
		<>
			<label htmlFor='NumberOfBeings'>Number of Beings</label>
			<input id='NumberOfBeings' type='text' value={numberOfBeings} onChange={(e)=>onChange(e.target.value)} />
		</>);

	export default NumberOfBeings;
