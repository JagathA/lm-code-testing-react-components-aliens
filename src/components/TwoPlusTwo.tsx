import React from 'react';

interface TwoPlusTwoProps {
	twoPlusTwo: string;
	onChange: (newValue:string) => void;
}

const PlanetName: React.FC<TwoPlusTwoProps> = ({ twoPlusTwo, onChange}) => (
	<>
		<label htmlFor='twoPlusTwo'>Planet Name</label>
		<select id='twoPlusTwo' value={twoPlusTwo} onChange={(e)=>onChange(e.target.value)}>
			<option id="0" >4</option>
			<option id="1" >Not 4</option>
		</select>

	</>);

export default PlanetName;
