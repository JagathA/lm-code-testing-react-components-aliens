import { render, screen } from '@testing-library/react';
import ErrorMessage, { ErrorMessageProps } from './ErrorMessage';


describe("<ErrorMessage>", () => {

	test(`Given the required props, 
		When the component is rendered
		Then the corrcet label text should be present`, () => {
	
			const requiredProps: ErrorMessageProps = {
				errorMessage: "Error: Serious problem has occured",
			}
			render(<ErrorMessage {...requiredProps} />);
			expect(screen.getByText(`${requiredProps.errorMessage}`)).toBeInTheDocument();
		});

	
	});
