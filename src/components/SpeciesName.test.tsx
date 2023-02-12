import { render, screen } from '@testing-library/react';
import SpeciesName, { SpeciesNameProps } from './SpeciesName';
import user from '@testing-library/user-event';

describe("<SpeciesName>", () => {
	const labelText = "Species Name";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "Species Name" should be present`, () => {
			const mockChange = jest.fn();
			const requiredProps: SpeciesNameProps = {
				speciesName: "Martians",
				onChange: mockChange,
			}
			render(<SpeciesName {...requiredProps} />);
			expect(screen.getByText(labelText)).toBeInTheDocument();
		});

		test(`Given the required props, 
		When the component is rendered
		Then the vaues passed in props should be present`, () => {
			const mockChange = jest.fn();
			const requiredProps: SpeciesNameProps = {
				speciesName: "Venusians",
				onChange: mockChange,
			}
			render(<SpeciesName {...requiredProps} />);
			expect(screen.getByDisplayValue(requiredProps.speciesName)).toBeInTheDocument();
		});

		test(`Given component is rendered, 
		when the user inputs text,
		Then onChange function is called the corrcet number of times`, async() => {
			const mockChange = jest.fn();
			const requiredProps: SpeciesNameProps = {
				speciesName: "Venusians",
				onChange: mockChange,
			}
			render(<SpeciesName {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),"Venusians");
        expect(requiredProps.onChange).toHaveBeenCalledTimes(9);
		});
	});
