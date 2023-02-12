import React from 'react';

export type TwoPlusTwoAnswer = "4" | "Not 4";

export interface TwoPlusTwoProps {
	twoPlusTwo: TwoPlusTwoAnswer;
	onChange: (newValue: TwoPlusTwoAnswer) => void;
}

const PlanetName: React.FC<TwoPlusTwoProps> = ({ twoPlusTwo, onChange}) => (
	<>
		<label htmlFor='twoPlusTwo'>what is 2 + 2 ?</label>
		<select id='twoPlusTwo' value={twoPlusTwo} onChange={(e)=>onChange(e.target.value as TwoPlusTwoAnswer)}>
			<option id="0" >4</option>
			<option id="1" >Not 4</option>
		</select>

	</>);

export default PlanetName;
