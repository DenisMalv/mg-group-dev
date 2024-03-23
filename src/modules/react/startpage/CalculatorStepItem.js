import React from 'react';

import Icon from '../IconSprite'


const CalculatorStepItem = ({step, active, svg})=>{

    return(
            <li className={`step flex ai-c gap-12-to-32 ${active ? "step-active" : ''}`}>
                <button className='step-btn'>
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