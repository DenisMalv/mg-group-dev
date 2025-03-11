import React, { useRef, useEffect, useState } from "react";

import Icon from "../IconSprite";

const StepSixFormError = ({ title, descr, setIsShow, isShow }) => {
	useEffect(() => {
		setTimeout(() => {
			setIsShow(true);
		}, 20);
	}, []);

	return (
		<>
			<h4 className={`calc-form-title ${isShow ? "show" : ""}`}>{title}</h4>
			<p>{descr}</p>
		</>
	);
};

export default StepSixFormError;
