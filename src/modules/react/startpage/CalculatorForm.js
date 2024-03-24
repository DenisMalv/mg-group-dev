import React,{useState,useEffect,useRef} from 'react';

import CalculatorStepItem from './CalculatorStepItem';
import StepOneFormContent from './StepOneFormContent';
import StepTwoFormContent from './StepTwoFormContent';
import StepThreeFormContent from './StepThreeFormContent';
import StepFourFormContent from './StepFourFormContent';
import StepOneDrillContent from './StepOneDrillContent';

const CalculatorForm = ({type})=>{
    console.log(type)
    const [isShow,setIsShow] = useState(true)
    const [step,setStep] = useState(1)
    const [open,setOpen] = useState('')
    const [data,setData] = useState({
        basement:'Бетон',
        wall:'Цегла',
        roof:'Металочерепиця',
        stage:1,
        area:'',
    })
    const [drillData,setDrillData] = useState({
        material:'Бетон',
        diametr:100,
        deep:100,
        count:1,
    })


    const basement = ['Бетон','Не-Бетон']
    const wall = ['Цегла','Панель',"Газоблок"]
    const roof = ['Металочерепиця','Шифер','Солома','Камиш']

    const material = ['Бетон','Цегла','Газобетон','Глина']
    const diametr = [100,200,300,400]
    const deep = [100,200,300,400,500,600,700,800]
    

    

    const updData = (name,value)=>{
        const newData = {...data}
        newData[name]=value

        setData(newData)
    }
    const updDrillData = (name,value)=>{
        const newDrillData = {...drillData}
        newDrillData[name]=value

        setDrillData(newDrillData)
    }

    const onNextStep = ()=>{
        if(step >= 4)return
        
        setIsShow(false)
        setTimeout(()=>{
            setStep(step+1)
        },300)
        
    }

    useEffect(()=>{
        setStep(1)
    },[type])

   
    

  



    return(
        type === 'build' 
            ?
            <form action="" className='calc-form bg-card p-lr-12-to-32 gap-44-to-68 br-16-to-24'>
                    <ul className='calc-step-wrapper gap-12-to-32'>
                        <CalculatorStepItem step={1} currentStep={step} setCurrentStep={setStep} active svg setIsShow={setIsShow}/>
                        <CalculatorStepItem step={2} currentStep={step} setCurrentStep={setStep} active={step >1   ? true : false} svg setIsShow={setIsShow}/>
                        <CalculatorStepItem step={3} currentStep={step} setCurrentStep={setStep} active={step >2  ? true : false} svg setIsShow={setIsShow}/>
                        <CalculatorStepItem step={4} currentStep={step} setCurrentStep={setStep} active={step >3  ? true : false} setIsShow={setIsShow}/>
                    </ul>

                    {step === 1 && <StepOneFormContent basement={basement} wall={wall} roof={roof} open={open} setOpen={setOpen} data={data} updData={updData} isShow={isShow} setIsShow={setIsShow}/>}
                    {step === 2 && <StepTwoFormContent stage={'stage'} data={data} updData={updData} isShow={isShow} setIsShow={setIsShow}/>}
                    {step === 3 && <StepThreeFormContent area={'area'} data={data} updData={updData} isShow={isShow} setIsShow={setIsShow}/>}
                    {step === 4 && <StepFourFormContent title={"Вартість вашого будинку"} descr={'Готові замовити або у вас залишилися запитання? Зв’яжіться з нами'} summ={32000} data={data} updData={updData} isShow={isShow} setIsShow={setIsShow} />}
                    
                    {step !== 4 
                        ?<button className='btn-primary calc-next-step' type='button' onClick={onNextStep}>Далі</button>
                        :<button className='btn-primary calc-next-step' type='button' onClick={()=>console.log('contact-us')}>Зв’язатися з нами</button>
                    }

            </form>


            :
            <form action="" className='calc-form bg-card p-lr-12-to-32 gap-44-to-68 br-16-to-24'>
                    <ul className='calc-step-wrapper gap-12-to-32'>
                        <CalculatorStepItem step={1} currentStep={step} setCurrentStep={setStep} active svg setIsShow={setIsShow}/>        
                        <CalculatorStepItem step={2} currentStep={step} setCurrentStep={setStep} active={step >1  ? true : false} setIsShow={setIsShow}/>
                    </ul>

                    {step === 1 && <StepOneDrillContent material={material} diametr={diametr} deep={deep} count={'count'} open={open} setOpen={setOpen} data={drillData} updData={updDrillData} isShow={isShow} setIsShow={setIsShow}/>}
                    {step === 2 && <StepFourFormContent title={"Вартість послуги з буріння отвору"} descr={'Готові замовити або у вас залишилися запитання? Зв’яжіться з нами'}  summ={10000} data={drillData} updData={updDrillData} isShow={isShow} setIsShow={setIsShow} drill/>}
                    
                    {step !== 2 
                        ?<button className='btn-primary calc-next-step' type='button' onClick={onNextStep}>Далі</button>
                        :<button className='btn-primary calc-next-step' type='button' onClick={()=>console.log('contact-us')}>Зв’язатися з нами</button>
                    }

            </form>



    )
}

export default CalculatorForm