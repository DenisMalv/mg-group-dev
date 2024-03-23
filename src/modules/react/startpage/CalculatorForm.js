import React,{useState} from 'react';

import CalculatorStepItem from './CalculatorStepItem';

const CalculatorForm = ({type})=>{
    console.log(type)
    const [step,setStep] = useState(1)

    return(
        type === 'build' 
            ?
            <form action="" className='calc-form bg-card p-lr-12-to-32 gap-44-to-68 br-16-to-24'>
                    <ul className='calc-step-wrapper gap-12-to-32'>
                        <CalculatorStepItem step={1} active svg />
                        <CalculatorStepItem step={2} active={step === 2 ? true : false} svg/>
                        <CalculatorStepItem step={3} active={step === 3 ? true : false} svg/>
                        <CalculatorStepItem step={4} active={step === 4 ? true : false} />
                    </ul>

                    <h4>Оберіть матеріал, який бажаєте використати</h4>


            </form>


            :
            <form action="" className='calc-form'>
                <div className='calc-step'>
                drill
                </div>
            </form>


    )
}

export default CalculatorForm