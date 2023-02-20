import React from 'react';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export interface SpeciesNameProps {
	speciesName: string;
	onChange: (newValue: string) => void;
}

const errLbl = "ERROR:"
const SPECIES_NAME_MIN_LENGTH = 3;
const SPECIES_NAME_MAX_LENGTH = 23;

export const errorSpeciesNameTooShort = `${errLbl} Species Name must be minimum ${SPECIES_NAME_MIN_LENGTH} characters`
export const errorSpeciesNameTooLong = `${errLbl} Species Name must be maximum ${SPECIES_NAME_MAX_LENGTH} characters`
export const errorSpeciesNameInvalidCharacters = `${errLbl} No numbers or special characters allowed!`

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChange }) => {

	const [errorMessage, setErrorMessage] =
		useState<string | undefined>(undefined);

	const validate: (value: string) => string | undefined = (value) => {
		const reg = /^[a-z]+$/i;;
		if (value.length > 0) {
			if (!reg.test(value)) {
				return errorSpeciesNameInvalidCharacters;
			}
			else if (value.length < SPECIES_NAME_MIN_LENGTH) {
				return errorSpeciesNameTooShort;
			}
			else if (value.length > SPECIES_NAME_MAX_LENGTH) {
				return errorSpeciesNameTooLong;
			}
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
