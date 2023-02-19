import { constants } from 'http2';
import React from 'react';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export interface SpeciesNameProps {
	speciesName: string;
	onChange: (newValue: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChange }) => {

	const [errorMessage, setErrorMessage] =
		useState<string | undefined>(undefined);

	const validate: (value: string) => string | undefined = (value) => {
		const reg = /^[a-z]+$/i;
		const errLbl = "Error:"
		if (!reg.test(value)) {
			return `${errLbl} No numbers or special characters allowed!`
		}

		else if (value.length < 3 || value.length > 23) {
			return `${errLbl} Must be between 3 and 23 characters`
		}

		return undefined;
	}
	return (
		<>
			<label htmlFor='speciesName'>Species Name</label>
			<input id='speciesName' type='text' value={speciesName} onChange={
				(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChange(e.target.value)
				}}
			/>
			<ErrorMessage errorMessage={errorMessage} />
		</>
	)
}

export default SpeciesName;
