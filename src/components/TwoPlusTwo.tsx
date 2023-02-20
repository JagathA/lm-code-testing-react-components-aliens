import React from 'react';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export type TwoPlusTwoAnswer = "4" | "Not 4";

export interface TwoPlusTwoProps {
	twoPlusTwo: TwoPlusTwoAnswer;
	onChange: (newValue: TwoPlusTwoAnswer) => void;
}
const errLbl = "ERROR:"
const TWO_PLUS_TWO_CORRECT_ANSWER: TwoPlusTwoAnswer = "4";

export const errorTwoPlusTwoAnswer = `${errLbl} Two Plus Two is ${TWO_PLUS_TWO_CORRECT_ANSWER}`

const PlanetName: React.FC<TwoPlusTwoProps> = ({ twoPlusTwo, onChange }) => {

	const [errorMessage, setErrorMessage] =
		useState<string | undefined>(undefined);

	const validate: (value: string) => string | undefined = (value) => {

		if (value !== TWO_PLUS_TWO_CORRECT_ANSWER) {
			return errorTwoPlusTwoAnswer;
		}
		return undefined;
	}

	return (
		<>
			<label htmlFor='twoPlusTwo'>what is 2 + 2 ?</label>

			<select id='twoPlusTwo' value={twoPlusTwo} onChange={
				(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChange(e.target.value as TwoPlusTwoAnswer)
				}}>
				<option id="0" >4</option>
				<option id="1" >Not 4</option>
			</select>

			<ErrorMessage errorMessage={errorMessage} />

		</>);
}

export default PlanetName;
