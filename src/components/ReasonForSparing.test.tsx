import { render, screen } from '@testing-library/react';
import ReasonForSparing, { ReasonForSparingProps } from './ReasonForSparing';
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
		Then onChange function is called the correct number of times`, async() => {
			const mockChange = jest.fn();
			const reasonForSparingEarthText = "Reason Sparing Earth 1234567890 1234567890";
			const requiredProps: ReasonForSparingProps = {
				reasonForSparing: "Reason Sparing Earth",
				onChange: mockChange,
			}
			render(<ReasonForSparing {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),reasonForSparingEarthText);
        expect(requiredProps.onChange).toHaveBeenCalledTimes(reasonForSparingEarthText.length);
		});
	});
