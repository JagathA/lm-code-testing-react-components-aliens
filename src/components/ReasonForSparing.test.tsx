import { render, screen } from '@testing-library/react';
import ReasonForSparing, { ReasonForSparingProps, errorReasonForSparingTooShort, errorReasonForSparingTooLong } from './ReasonForSparing';
import user from '@testing-library/user-event';

describe("<ReasonForSparing>", () => {
	const labelText = "Reason For Sparing";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "Reason For Sparing" should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: ReasonForSparingProps = {
			reasonForSparing: "Reason Sparing Earth",
			onChange: mockChange,
		}
		render(<ReasonForSparing {...requiredProps} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	test(`Given the required props, 
		When the component is rendered
		Then the values passed in props should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: ReasonForSparingProps = {
			reasonForSparing: "Reason Sparing Earth",
			onChange: mockChange,
		}
		render(<ReasonForSparing {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.reasonForSparing)).toBeInTheDocument();
	});

	test(`Given component is rendered, 
		when the user inputs text,
		Then onChange function is called the correct number of times`, async () => {
		const mockChange = jest.fn();
		const reasonForSparingEarthText = "Reason Sparing Earth 1234567890 1234567890";
		const requiredProps: ReasonForSparingProps = {
			reasonForSparing: "Reason Sparing Earth",
			onChange: mockChange,
		}
		render(<ReasonForSparing {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), reasonForSparingEarthText);
		expect(requiredProps.onChange).toHaveBeenCalledTimes(reasonForSparingEarthText.length);
	});

	test(`Given use inputs a valid inputs for reason for sparing (between 17 and 153 characters ), 
		when the component is rendered,
		An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: ReasonForSparingProps = {
			reasonForSparing: "1234567890123456",
			onChange: mockChange,
		}
		render(<ReasonForSparing {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "1");
		expect(screen.queryByText(errorReasonForSparingTooShort)).not.toBeInTheDocument();
		expect(screen.queryByText(errorReasonForSparingTooLong)).not.toBeInTheDocument();
	});

	test(`Given use inputs a invalid inputs for reason for sparing (less than 17 characters ), 
	when the component is rendered,
	An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: ReasonForSparingProps = {
			reasonForSparing: "123456789012345",
			onChange: mockChange,
		}
		render(<ReasonForSparing {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "1");
		expect(screen.getByText(errorReasonForSparingTooShort)).toBeInTheDocument();
	});

	test(`Given use inputs a invalid inputs for reason for sparing (greater than than 153 characters ), 
	when the component is rendered,
	An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: ReasonForSparingProps = {
			reasonForSparing: `This is a very long text 0f 45 charatceters.
			s. This is a very long text 0f 45 charatceters.This is a very long text 0f 45 charatceters.This is a very long text 0f 45 charatceters.`,
			onChange: mockChange,
		}
		render(<ReasonForSparing {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "1");
		expect(screen.getByText(errorReasonForSparingTooLong)).toBeInTheDocument();
	});
});
