import React from 'react';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export interface PlanetNameProps {
	planetName: string;
	onChange: (newValue: string) => void;
}

const errLbl = "ERROR:"
const PLANET_NAME_MIN_LENGTH = 2;
const PLANET_NAME_MAX_LENGTH = 49;

export const errorPlanetNameTooShort = `${errLbl} Planet Name must be minimum ${PLANET_NAME_MIN_LENGTH} characters`
export const errorPlanetNameTooLong = `${errLbl} Planet Name must be maximum ${PLANET_NAME_MAX_LENGTH} characters`
export const errorPlanetNameInvalidCharacters = `${errLbl} No numbers or special characters allowed!`

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChange }) => {

	const [errorMessage, setErrorMessage] =
	useState<string | undefined>(undefined);

const validate: (value: string) => string | undefined = (value) => {
	const reg = /^[a-z0-9]+$/i;
	
	if (value.length > 0) {
		if (!reg.test(value)) {
			return errorPlanetNameInvalidCharacters;
		}
		else if (value.length < PLANET_NAME_MIN_LENGTH) {
			return errorPlanetNameTooShort;
		}
		else if (value.length > PLANET_NAME_MAX_LENGTH) {
			return errorPlanetNameTooLong;
		}
	}

	return undefined;
}

	return (
	<>
		<label htmlFor='planetName'>Planet Name</label>
		<input id='planetName' type='text' value={planetName} onChange={
				(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChange(e.target.value)
				}}
			/>
			<ErrorMessage errorMessage={errorMessage} />
	</>);
}
export default PlanetName;
