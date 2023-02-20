import { render, screen } from '@testing-library/react';
import ErrorMessage, { ErrorMessageProps } from './ErrorMessage';


describe("<ErrorMessage>", () => {

	test(`Given the required props, 
		When the component is rendered
		Then the correct Error text should be present`, () => {

		const requiredProps: ErrorMessageProps = {
			errorMessage: "ERROR: Serious problem has occured",
		}
		render(<ErrorMessage {...requiredProps} />);
		expect(screen.getByText(`${requiredProps.errorMessage}`)).toBeInTheDocument();
	});

	test(`Given the required props, 
		When the component is rendered
		Then Error lebel text should not  present`, () => {

		const requiredProps: ErrorMessageProps = {
			errorMessage: undefined,
		}
		render(<ErrorMessage {...requiredProps} />);
		expect(screen.queryByText(`ERROR`)).not.toBeInTheDocument();
	});

});
