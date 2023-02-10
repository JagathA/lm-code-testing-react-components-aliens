import React from 'react';

interface PlanetNameProps {
	planetName: string;
	onChange: (newValue:string) => void;
}

	const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChange }) => (
		<>
			<label htmlFor='planetName'>Planet Name</label>
			<input id='planetName' type='text' value={planetName} onChange={(e)=>onChange(e.target.value)} />
		</>);

	export default PlanetName;
