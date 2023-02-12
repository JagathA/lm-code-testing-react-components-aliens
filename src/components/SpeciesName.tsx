import React from 'react';

export interface SpeciesNameProps {
	speciesName: string;
	onChange: (newValue:string) => void;
}

	const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChange }) => (
		<>
			<label htmlFor='speciesName'>Species Name</label>
			<input id='speciesName' type='text' value={speciesName} onChange={(e)=>onChange(e.target.value)} />
		</>);

	export default SpeciesName;
