import { render, screen } from '@testing-library/react';
import TwoPlusTwo, { TwoPlusTwoProps } from './TwoPlusTwo';
import user from '@testing-library/user-event';

describe("<TwoPlusTwo>", () => {
	const labelText = "what is 2 + 2 ?";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "What is 2 + 2 ?" should be present`, () => {
			const mockChange = jest.fn();
			const requiredProps: TwoPlusTwoProps = {
				twoPlusTwo: "4",
				onChange: mockChange,
			}
			render(<TwoPlusTwo {...requiredProps} />);
			expect(screen.getByText(labelText)).toBeInTheDocument();
		});

		test(`Given the required props, 
		When the component is rendered
		Then the vaues passed in props should be present`, () => {
			const mockChange = jest.fn();
			const requiredProps: TwoPlusTwoProps = {
				twoPlusTwo: "4",
				onChange: mockChange,
			}
			render(<TwoPlusTwo {...requiredProps} />);
			expect(screen.getByDisplayValue(requiredProps.twoPlusTwo)).toBeInTheDocument();
		});

		test(`Given component is rendered, 
		when the user selects option "4",
		Then onChange function is called the corrcet number of times`, async() => {
			const mockChange = jest.fn();
			const requiredProps: TwoPlusTwoProps = {
				twoPlusTwo: "Not 4",
				onChange: mockChange,
			}
			render(<TwoPlusTwo {...requiredProps} />);
			await user.selectOptions(screen.getByLabelText(labelText),"4");
        expect(requiredProps.onChange).toHaveBeenCalledTimes(1);
		});

		test(`Given component is rendered, 
		when the user selects option "not 4",
		Then onChange function is called the corrcet number of times`, async() => {
			const mockChange = jest.fn();
			const requiredProps: TwoPlusTwoProps = {
				twoPlusTwo: "Not 4",
				onChange: mockChange,
			}
			render(<TwoPlusTwo {...requiredProps} />);
			await user.selectOptions(screen.getByLabelText(labelText),"Not 4");
        expect(requiredProps.onChange).toHaveBeenCalledTimes(1);
		});
	});
