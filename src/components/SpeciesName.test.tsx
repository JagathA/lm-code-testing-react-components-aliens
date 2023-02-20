import { render, screen } from '@testing-library/react';
import SpeciesName, { SpeciesNameProps, errorSpeciesNameTooShort, errorSpeciesNameTooLong, errorSpeciesNameInvalidCharacters } from './SpeciesName';
import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

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

		test(`Given use inputs a valid inputs for Species name (between 3 and 23 characters ), 
		when the component is rendered,
		An error message is not displayed`, async() => {
			const mockChange = jest.fn();
			const requiredProps: SpeciesNameProps = {
				speciesName: "thisIsAValidInpu",
				onChange: mockChange,
			}
			render(<SpeciesName {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),"t");
			expect(screen.queryByText(errorSpeciesNameTooLong)).not.toBeInTheDocument();
			expect(screen.queryByText(errorSpeciesNameTooShort)).not.toBeInTheDocument();
			expect(screen.queryByText(errorSpeciesNameInvalidCharacters)).not.toBeInTheDocument();

			
		});

		test(`Given use inputs an invalid inputs for Species name (less than 3 characters), 
		when the component is rendered,
		The correct error message is displayed`, async() => {
			const mockChange = jest.fn();
			const requiredProps: SpeciesNameProps = {
				speciesName: "V",
				onChange: mockChange,
			}
			render(<SpeciesName {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),"e");
			expect(screen.getByText(errorSpeciesNameTooShort)).toBeInTheDocument();
		});


		test(`Given use inputs an invalid inputs for Species name (More than 23 characters), 
		when the component is rendered,
		The correct error message is displayed`, async() => {
			const mockChange = jest.fn();
			const requiredProps: SpeciesNameProps = {
				speciesName: "morethantwentythreechar",
				onChange: mockChange,
			}
			render(<SpeciesName {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),"m");
			expect(screen.getByText(errorSpeciesNameTooLong)).toBeInTheDocument();
		});

		test(`Given use inputs an invalid inputs for Species name (number), 
		when the component is rendered,
		The correct error message is displayed`, async() => {
			const mockChange = jest.fn();
			const requiredProps: SpeciesNameProps = {
				speciesName: "morethantwentythreec",
				onChange: mockChange,
			}
			render(<SpeciesName {...requiredProps} />);
			userEvent.clear(screen.getByLabelText(labelText));
			await user.type(screen.getByLabelText(labelText),"6");
			expect(screen.getByText(errorSpeciesNameInvalidCharacters)).toBeInTheDocument();
		});


		
	});
