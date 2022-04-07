import React, { useState } from "react";

import propTypes from 'prop-types';

export default function Stepper(props) {

	const {steps, initialStep} = props;
	const stepskeys = Object.keys(steps);

	const [CurrentStep, setCurrentStep] = useState(
		stepskeys.indexOf(initialStep) > -1 ? initialStep : stepskeys[0]
	);

	const totalStep = stepskeys.length;
	const indexStep = stepskeys.indexOf(CurrentStep);

	function prevStep() {
		if (+indexStep > 0)
		setCurrentStep(stepskeys[indexStep - 1]);
	}

	function nextStep() {
		if (+indexStep < totalStep)
		setCurrentStep(stepskeys[indexStep + 1]);
	}
  
	return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.steps = {
	data: propTypes.object.isRequired,
	initialStep: propTypes.string,
}

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
