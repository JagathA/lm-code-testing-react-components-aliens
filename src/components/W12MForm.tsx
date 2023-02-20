import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import TwoPlusTwo, {TwoPlusTwoAnswer} from './TwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';
import SubmittedData from './SubmittedData';



const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('humans');
	const [planetName, setPlanetName] = useState<string>('Earth');
	const [numberOfBeings, setNumberOfBeings] = useState<number>(0);
	const [twoPlusTwo, setTwoPlusTwo] = useState<TwoPlusTwoAnswer>('4');
	const [reasonForSparing, setReasonForSparing] = useState<string>('A Lot');
	const [submitted, setSubmitted] = useState<boolean>(false);
	

	function submitClicked() {
		setSubmitted(true);
	}
	

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div>
				<SpeciesName speciesName={speciesName} onChange={(newValue) => setSpeciesName(newValue)} />
			</div>
			<div>
				<PlanetName planetName={planetName} onChange={(newValue) => setPlanetName(newValue)} />
			</div>			
			<div>
				<NumberOfBeings numberOfBeings={numberOfBeings} onChange={(newValue) => setNumberOfBeings(newValue)} />
			</div>
						
			<div>
				<TwoPlusTwo twoPlusTwo={twoPlusTwo} onChange={(newValue) => setTwoPlusTwo(newValue)} />
			</div>

			<div>
				<ReasonForSparing reasonForSparing={reasonForSparing} onChange={(newValue) => setReasonForSparing(newValue)} />
			</div>

			<button type='submit' onClick={()=>{
				submitClicked();
			}}>Submit</button>

            <section>
				<SubmittedData submitted = {submitted}  speciesName={speciesName} planetName={planetName} numberOfBeings={numberOfBeings} twoPlusTwo={twoPlusTwo} reasonForSparing={reasonForSparing}/>
			</section>

			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
