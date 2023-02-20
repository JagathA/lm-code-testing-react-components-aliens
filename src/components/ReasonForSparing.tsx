import React from 'react';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export interface ReasonForSparingProps {
	reasonForSparing: string;
	onChange: (newValue: string) => void;
}
const errLbl = "ERROR:"
const REASON_FOR_SPARING_MIN_LENGTH = 17;
const REASON_FOR_SPARING_MAX_LENGTH = 153;

export const errorReasonForSparingTooShort = `${errLbl} Must be minimum ${REASON_FOR_SPARING_MIN_LENGTH} characters`
export const errorReasonForSparingTooLong = `${errLbl} Must be maximum ${REASON_FOR_SPARING_MAX_LENGTH} characters`

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChange }) => {

	const [errorMessage, setErrorMessage] =
		useState<string | undefined>(undefined);

	const validate: (value: string) => string | undefined = (value) => {

		if (value.length > 0) {
			if (value.length < REASON_FOR_SPARING_MIN_LENGTH) {
				return errorReasonForSparingTooShort;
			}
			else if (value.length > REASON_FOR_SPARING_MAX_LENGTH) {
				return errorReasonForSparingTooLong;
			}
		}

		return undefined;
	}
	return (
		<>
			<label htmlFor='reasonForSparing' >Reason For Sparing</label>

			<textarea id='reasonForSparing' value={reasonForSparing} onChange={
				(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChange(e.target.value)
				}} rows={5} cols={100}
			/>
			<ErrorMessage errorMessage={errorMessage} />
		</>);
}

export default ReasonForSparing;
