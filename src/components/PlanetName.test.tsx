import { render, screen } from '@testing-library/react';
import PlanetName, { PlanetNameProps, errorPlanetNameTooShort, errorPlanetNameTooLong, errorPlanetNameInvalidCharacters } from './PlanetName';
import user from '@testing-library/user-event';

describe("<PlanetName>", () => {
	const labelText = "Planet Name";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "Planet Name" should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: PlanetNameProps = {
			planetName: "Earth",
			onChange: mockChange,
		}
		render(<PlanetName {...requiredProps} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	test(`Given the required props, 
		When the component is rendered
		Then the vaues passed in props should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: PlanetNameProps = {
			planetName: "Earth",
			onChange: mockChange,
		}
		render(<PlanetName {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.planetName)).toBeInTheDocument();
	});

	test(`Given component is rendered, 
		when the user inputs text,
		Then onChange function is called the corrcet number of times`, async () => {
		const mockChange = jest.fn();
		const requiredProps: PlanetNameProps = {
			planetName: "Earth",
			onChange: mockChange,
		}
		render(<PlanetName {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "Jupiter");
		expect(requiredProps.onChange).toHaveBeenCalledTimes(7);
	});

	test(`Given use inputs a valid inputs for Planet name (between 3 and 49 characters ), 
		when the component is rendered,
		An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: PlanetNameProps = {
			planetName: "ThisIsAValidInout67",
			onChange: mockChange,
		}
		render(<PlanetName {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "8");
		expect(screen.queryByText(errorPlanetNameTooLong)).not.toBeInTheDocument();
		expect(screen.queryByText(errorPlanetNameTooShort)).not.toBeInTheDocument();
		expect(screen.queryByText(errorPlanetNameInvalidCharacters)).not.toBeInTheDocument();
	});

	test(`Given use inputs an invalid inputs for Planet name (less than 3 characters), 
		when the component is rendered,
		The correct error message is displayed`, async() => {
			const mockChange = jest.fn();
			const requiredProps: PlanetNameProps = {
				planetName: "",
				onChange: mockChange,
			}
			render(<PlanetName {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),"e");
			expect(screen.getByText(errorPlanetNameTooShort)).toBeInTheDocument();
		});


		test(`Given use inputs an invalid inputs for Planet name (More than 23 characters), 
		when the component is rendered,
		The correct error message is displayed`, async() => {
			const mockChange = jest.fn();
			const requiredProps: PlanetNameProps = {
				planetName: "morethanThirtyNineCharacters12345678901234567890R",
				onChange: mockChange,
			}
			render(<PlanetName {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),"m");
			expect(screen.getByText(errorPlanetNameTooLong)).toBeInTheDocument();
		});

		test(`Given use inputs an invalid inputs for Planet name (special character), 
		when the component is rendered,
		The correct error message is displayed`, async() => {
			const mockChange = jest.fn();
			const requiredProps: PlanetNameProps = {
				planetName: "morethantwentythreec",
				onChange: mockChange,
			}
			render(<PlanetName {...requiredProps} />);
			//userEvent.clear(screen.getByLabelText(labelText));
			await user.type(screen.getByLabelText(labelText),"*");
			expect(screen.getByText(errorPlanetNameInvalidCharacters)).toBeInTheDocument();
		});

});
