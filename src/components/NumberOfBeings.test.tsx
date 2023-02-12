import { render, screen } from '@testing-library/react';
import NumberOfbeings, { NumberOfBeingsProps } from './NumberOfBeings'
import user from '@testing-library/user-event';

describe("<NumberOfBeings>", () => {
	const labelText = "Number of Beings";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "Number Of beings" should be present`, () => {
			const mockChange = jest.fn();
			const requiredProps: NumberOfBeingsProps = {
				numberOfBeings: 1000,
				onChange: mockChange,
			}
			render(<NumberOfbeings {...requiredProps} />);
			expect(screen.getByText(labelText)).toBeInTheDocument();
		});

		test(`Given the required props, 
		When the component is rendered
		Then the vaues passed in props should be present`, () => {
			const mockChange = jest.fn();
			const requiredProps: NumberOfBeingsProps = {
				numberOfBeings: 1000,
				onChange: mockChange,
			}
			render(<NumberOfbeings {...requiredProps} />);
			expect(screen.getByDisplayValue(requiredProps.numberOfBeings)).toBeInTheDocument();
		});

		test(`Given component is rendered, 
		when the user inputs text,
		Then onChange function is called the corrcet number of times`, async() => {
			const mockChange = jest.fn();
			const requiredProps: NumberOfBeingsProps = {
				numberOfBeings: 1000,
				onChange: mockChange,
			}
			render(<NumberOfbeings {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),"700000000");
        expect(requiredProps.onChange).toHaveBeenCalledTimes(9);
		});
	});
