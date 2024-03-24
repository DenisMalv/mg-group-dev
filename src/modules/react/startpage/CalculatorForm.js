import React,{useState,useEffect,useRef} from 'react';

import CalculatorStepItem from './CalculatorStepItem';
import StepOneFormContent from './StepOneFormContent';
import StepTwoFormContent from './StepTwoFormContent';
import StepThreeFormContent from './StepThreeFormContent';
import StepFourFormContent from './StepFourFormContent';

const CalculatorForm = ({type})=>{
    console.log(type)
    const [step,setStep] = useState(2)
    const [open,setOpen] = useState('')
    const [data,setData] = useState({
        basement:'Бетон',
        wall:'Цегла',
        roof:'Металочерепиця',
        stage:1,
        area:'',
    })
    const basement = ['Бетон','Не-Бетон']
    const wall = ['Цегла','Панель',"Газоблок"]
    const roof = ['Металочерепиця','Шифер','Солома','Камиш']

    const updData = (name,value)=>{
        const newData = {...data}
        newData[name]=value

        setData(newData)
    }

    const onNextStep = ()=>{
        if(step >= 4)return
        setStep(step+1)
    }
   
    

  



    return(
        type === 'build' 
            ?
            <form action="" className='calc-form bg-card p-lr-12-to-32 gap-44-to-68 br-16-to-24'>
                    <ul className='calc-step-wrapper gap-12-to-32'>
                        <CalculatorStepItem step={1} currentStep={step} setCurrentStep={setStep} active svg />
                        <CalculatorStepItem step={2} currentStep={step} setCurrentStep={setStep} active={step >1   ? true : false} svg/>
                        <CalculatorStepItem step={3} currentStep={step} setCurrentStep={setStep} active={step >2  ? true : false} svg/>
                        <CalculatorStepItem step={4} currentStep={step} setCurrentStep={setStep} active={step >3  ? true : false} />
                    </ul>

                    {step === 1 && <StepOneFormContent basement={basement} wall={wall} roof={roof} open={open} setOpen={setOpen} data={data} updData={updData}/>}
                    {step === 2 && <StepTwoFormContent stage={'stage'} data={data} updData={updData}/>}
                    {step === 3 && <StepThreeFormContent area={'area'} data={data} updData={updData}/>}
                    {step === 4 && <StepFourFormContent summ={32000} data={data} updData={updData}/>}
                    
                    <button className='btn-primary calc-next-step' type='button' onClick={onNextStep}>Далі</button>

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