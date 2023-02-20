import { render, screen } from '@testing-library/react';
import W12MForm from './W12MForm';
import userEvent from '@testing-library/user-event';
import user from '@testing-library/user-event';


describe("<W!2Form>", () => {
	test('renders form element', () => {
		// we can hold onto the object returned from render()
		// this object has a container property that we can destructure and inspect
		const { container } = render(<W12MForm />);

		// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
		// for example, the firstChild of our container should be our form element
		expect(container.firstChild).toHaveClass('w12MForm');


	});

	test(`When the component is rendered, 
	Then the confirm button should be present`, () => {
		render(<W12MForm />);

		const submitButton =
			screen.getAllByRole("button").find(b => b.textContent === "Submit");

		expect(submitButton).toBeInTheDocument();
	});

	test(`When the submit button is pressed, 
	Then the correct data for Species Name is submitted`, async () => {

		const LabelText = "Species Name";

		render(<W12MForm />);
		userEvent.clear(screen.getByLabelText(LabelText));
		await user.type(screen.getByLabelText(LabelText), "Humanoid");

		const submitButton =
			screen.getAllByRole("button").find(b => b.textContent === "Submit");


		if (submitButton) {
			await userEvent.click(submitButton);
		}

		expect(screen.getByText("Submitted Species Name: Humanoid")).toBeInTheDocument();
	});


	test(`When the submit button is pressed, 
	Then the correct data for Planet Name is submitted`, async () => {

		const LabelText = "Planet Name";

		render(<W12MForm />);
		userEvent.clear(screen.getByLabelText(LabelText));
		await user.type(screen.getByLabelText(LabelText), "Jupiter");

		const submitButton =
			screen.getAllByRole("button").find(b => b.textContent === "Submit");


		if (submitButton) {
			await userEvent.click(submitButton);
		}

		expect(screen.getByText("Submitted Planet Name: Jupiter")).toBeInTheDocument();
	});

	test(`When the submit button is pressed, 
	Then the correct data for Number Of Beings is submitted`, async () => {

		const LabelText = "Number of Beings";

		render(<W12MForm />);
		userEvent.clear(screen.getByLabelText(LabelText));
		await user.type(screen.getByLabelText(LabelText), "123456789");

		const submitButton =
			screen.getAllByRole("button").find(b => b.textContent === "Submit");


		if (submitButton) {
			await userEvent.click(submitButton);
		}

		expect(screen.getByText("Submitted Number Of Beings: 123456789")).toBeInTheDocument();
	});

	test(`When the submit button is pressed, 
	Then the correct data for what is 2+2 ? is submitted`, async () => {

		const LabelText = "what is 2 + 2 ?"

		render(<W12MForm />);
		//userEvent.clear(screen.getByLabelText(LabelText));
		await user.selectOptions(screen.getByLabelText(LabelText), "4");

		const submitButton =
			screen.getAllByRole("button").find(b => b.textContent === "Submit");


		if (submitButton) {
			await userEvent.click(submitButton);
		}

		expect(screen.getByText("Submitted what is 2+2?: 4")).toBeInTheDocument();
	});

	test(`When the submit button is pressed, 
	Then the correct data for Reason For Sparing is submitted`, async () => {

		const LabelText = "Reason For Sparing";

		render(<W12MForm />);
		userEvent.clear(screen.getByLabelText(LabelText));
		const reasonForSparing = "This is a load of gibberish. But I hope it will work"
		await user.type(screen.getByLabelText(LabelText), reasonForSparing);

		const submitButton =
			screen.getAllByRole("button").find(b => b.textContent === "Submit");


		if (submitButton) {
			await userEvent.click(submitButton);
		}

		expect(screen.getByText(`Submitted Reason For Sparing: ${reasonForSparing}`)).toBeInTheDocument();
	});




})