import { render, screen } from '@testing-library/react';
import NumberOfBeings, { NumberOfBeingsProps, errorNumberOfBeingsTooSmall, errorNumberOfBeingsNotNumber } from './NumberOfBeings'
import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

describe("<NumberOfBeings>", () => {
	const labelText = "Number of Beings";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "Number Of beings" should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: NumberOfBeingsProps = {
			numberOfBeings: "1000",
			onChange: mockChange,
		}
		render(<NumberOfBeings {...requiredProps} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	test(`Given the required props, 
		When the component is rendered
		Then the vaues passed in props should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: NumberOfBeingsProps = {
			numberOfBeings: "1000",
			onChange: mockChange,
		}
		render(<NumberOfBeings {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.numberOfBeings)).toBeInTheDocument();
	});

	test(`Given component is rendered, 
		when the user inputs text,
		Then onChange function is called the corrcet number of times`, async () => {
		const mockChange = jest.fn();
		const requiredProps: NumberOfBeingsProps = {
			numberOfBeings: "1111",
			onChange: mockChange,
		}
		render(<NumberOfBeings {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "700000000");
		expect(requiredProps.onChange).toHaveBeenCalledTimes(9);
	});


	test(`Given use inputs a valid inputs for Number Of Beings (whole number mimimum value 1000000000), 
		when the component is rendered,
		An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: NumberOfBeingsProps = {
			numberOfBeings: "1000000000",
			onChange: mockChange,
		}
		render(<NumberOfBeings {...requiredProps} />);
		userEvent.clear(screen.getByLabelText(labelText));
		await user.type(screen.getByLabelText(labelText), "1");
		expect(screen.queryByText(errorNumberOfBeingsTooSmall)).not.toBeInTheDocument();
		expect(screen.queryByText(errorNumberOfBeingsNotNumber)).not.toBeInTheDocument();
	});

	test(`Given use inputs an invalid inputs for Number Of Beings (not a whole number), 
	when the component is rendered,
	The correct error message is displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: NumberOfBeingsProps = {
			numberOfBeings: "12.1",
			onChange: mockChange,
		}
		render(<NumberOfBeings {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "4");
		expect(screen.getByText(errorNumberOfBeingsNotNumber)).toBeInTheDocument();
	});

	test(`Given use inputs an invalid inputs for Number Of Beings (less than 1000000000), 
	when the component is rendered,
	The correct error message is displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: NumberOfBeingsProps = {
			numberOfBeings: "10000000",
			onChange: mockChange,
		}
		render(<NumberOfBeings {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "4");
		expect(screen.getByText(errorNumberOfBeingsTooSmall)).toBeInTheDocument();
	});

});
