import React from 'react';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export interface NumberOfBeingsProps {
	numberOfBeings: string;
	onChange: (newValue: string) => void;
}

const errLbl = "ERROR:"
const NUMBER_OF_BEINGS_MIN = 1000000000;

export const errorNumberOfBeingsTooSmall = `${errLbl} Must be minimum ${NUMBER_OF_BEINGS_MIN}`
export const errorNumberOfBeingsNotNumber = `${errLbl} Must be a whole number`

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChange }) => {

	const [errorMessage, setErrorMessage] =
		useState<string | undefined>(undefined);

	const validate: (value: string) => string | undefined = (value) => {
		const reg = /^[0-9]+$/i;

		if (value.length > 0) {
			if (!reg.test(value)) {
				return errorNumberOfBeingsNotNumber;
			}
			else if (Number(value) < NUMBER_OF_BEINGS_MIN) {
				return errorNumberOfBeingsTooSmall;
			}

		}

		return undefined;
	}

	return (
		<>
			<label htmlFor='NumberOfBeings'>Number of Beings</label>
			<input id='NumberOfBeings' type='number' value={numberOfBeings} onChange={
				(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChange(e.target.value)
				}}
			/>
			<ErrorMessage errorMessage={errorMessage} />
		</>);
}
export default NumberOfBeings;
