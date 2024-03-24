import React from 'react';

import Icon from '../IconSprite'


const CalculatorStepItem = ({step, currentStep, setCurrentStep, active, svg})=>{
    const toPrevStep=(e)=>{
        if(e.target.id && currentStep > +e.target.id){
            setCurrentStep(+e.target.id)
        }
    }
    return(
            <li className={`step flex ai-c gap-12-to-32 ${active ? "step-active" : ''}`}>
                <button type='button' role='button' className='step-btn' id={step} onClick={toPrevStep} >
                    {step}
                </button>
                {svg &&
                <span className='calc-svg-wrapper '>
                    <Icon classlist="mobile-arrow-step-svg " name="mobile-arrow-in-calculator"  color="#5C7065" width="20" height="24"/>
                </span>
                }
            </li> 
        )
    }
    
export default CalculatorStepItem