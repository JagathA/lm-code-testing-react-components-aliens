import { render, screen } from '@testing-library/react';
import PlanetName, { PlanetNameProps } from './PlanetName';
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
		Then onChange function is called the corrcet number of times`, async() => {
			const mockChange = jest.fn();
			const requiredProps: PlanetNameProps = {
				planetName: "Earth",
				onChange: mockChange,
			}
			render(<PlanetName {...requiredProps} />);
			await user.type(screen.getByLabelText(labelText),"Jupiter");
        expect(requiredProps.onChange).toHaveBeenCalledTimes(7);
		});
	});
