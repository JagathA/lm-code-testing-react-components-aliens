

export interface ErrorMessageProps {
	errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({errorMessage}) => (
	<>
		<p className="red-text">{errorMessage}  </p>
	</>);

export default ErrorMessage;
