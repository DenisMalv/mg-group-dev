import React,{useState,useEffect,useRef} from 'react';

import CalculatorStepItem from './CalculatorStepItem';
import StepOneFormContent from './StepOneFormContent';
import StepTwoFormContent from './StepTwoFormContent';
import StepThreeFormContent from './StepThreeFormContent';
import StepFourFormContent from './StepFourFormContent';
import StepOneDrillContent from './StepOneDrillContent';

import { openPopUp } from '../../modals/popupModal';

const CalculatorForm = ({type,typeIsShow,setTypeIsShow,isShow,setIsShow})=>{
    console.log(type)
   
    const [error,setError] = useState({
        area:false,
        count:false,
    })
    const [step,setStep] = useState(1)
    const [open,setOpen] = useState('')
    const [data,setData] = useState({
        basement:'Фундамент і чорнова підлога',
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


    const basement = ['Фундамент і чорнова підлога','Залізобетон']
    const wall = ['Цегла','Газобетон',]
    const roof = ['Металочерепиця','Бітумна черепиця']

    const material = ['Бетон','Цегла','Газоблок','Глина']
    const diametr = [100,200,300,400]
    const deep = [100,200,300,400,500,600,700,800]
    

    const onChangeInput = (name,value) =>{
        if(value !== ''){
            setError({...error,[name]:false})
        }

        type === 'build' 
            ? setData({...data,[name]:value})
            : setDrillData({...drillData,[name]:value})
    }

    const toPrevStep=(e)=>{
        console.log(e)
        if(step <= 1 ) return

        if(e.target.id && step > +e.target.id){
            setIsShow(false)
            setTimeout(()=>{setStep(+e.target.id)},300)
        }

        // if(step === 1){
        //     return
        // }
        // setStep((prev)=>prev -1)
    }

    const onNextStep = (name)=>{
        if(step >= 4)return
        if(type ==='build' && step===3 && data[name] === ''){
            setError({...error,[name]:true})
            return
        }
        if(type ==='drill' && drillData[name] === ''){
            setError({...error,[name]:true})
            return
        }
        
        setIsShow(false)
        setTimeout(()=>{
            setStep(step+1)
        },300)
        
    }

    const buildPrises = {
        'Фундамент і чорнова підлога':80,
        'Залізобетон':55,

        'Цегла':125,
        'Газобетон':100,

        'Металочерепиця':70,
        'Бітумна черепиця':90,

        '1':1,
        '2':0.7,
        // 'area-1':100,
        // 'area-2':110,
        // 'area-3':140,
        // 'area-4':150,
        // 'area-5':160,
    }
    const drillPrises ={
        'Бетон':100,
        'Газоблок':40,
        'Глина':48,
        'Цегла':100,
        'diametr-100':100,
        'diametr-200':200,
        'diametr-300':300,
        'diametr-400':400,
        'diametr-500':500,
        'deep-100':100,
        'deep-200':200,
        'deep-300':300,
        'deep-400':400,
        'deep-500':500,
        'deep-600':600,
        'deep-700':700,
        'deep-800':800,
    }

    const totalBuildSumm = () =>{
        const numberArea = +data['area']
        
        let basement = 0
        console.log(data['basement'])
        if(data['basement'] === 'Фундамент і чорнова підлога' || data['basement'] === 'Залізобетон'){
            basement =  buildPrises['Фундамент і чорнова підлога'] + buildPrises['Залізобетон']
        } else {
            basement =  buildPrises[data['basement']]
        }

        // const basement = buildPrises[data['basement']]
        const wall = buildPrises[data['wall']]
        const roof = buildPrises[data['roof']]
        const stage = buildPrises[data['stage']]
        // let area = 0
        // if(numberArea <50) area = buildPrises['area-1']
        // if(numberArea >=50 && numberArea <=80) area = buildPrises['area-2']
        // if(numberArea >=81 && numberArea <=120) area = buildPrises['area-3']
        // if(numberArea >=121 && numberArea <=200) area = buildPrises['area-4']
        // if(numberArea >200) area = buildPrises['area-5']
        console.log(basement)
        console.log(wall)
        console.log(roof)
        console.log(stage)
        console.log(numberArea)
        
        return Math.round((basement+wall+roof)*stage*numberArea)
    }
    const totalDrillSumm = () =>{
        const material = drillPrises[drillData['material']]
        const diametr = drillPrises[`diametr-${drillData['diametr']}`]
        const deep = drillPrises[`deep-${drillData['deep']}`]
        const count = +drillData['count']
        
        return (material+diametr+deep)*count
    }

    useEffect(()=>{
        setStep(1)
    },[type])

   
    useEffect(()=>{
        setTimeout(()=>{setTypeIsShow(true)},10)
    },[type])

  



    return(
        type === 'build' 
            ?
            <form action="" className='calc-form bg-card p-lr-12-to-32 gap-44-to-68 br-16-to-24'>
                    <ul className={`calc-step-wrapper gap-12-to-32  ${typeIsShow ? 'show' : ''}`}>
                        <CalculatorStepItem step={1} currentStep={step} setCurrentStep={setStep} active svg setIsShow={setIsShow} toPrevStep={toPrevStep}/>
                        <CalculatorStepItem step={2} currentStep={step} setCurrentStep={setStep} active={step >1   ? true : false} svg setIsShow={setIsShow} toPrevStep={toPrevStep}/>
                        <CalculatorStepItem step={3} currentStep={step} setCurrentStep={setStep} active={step >2  ? true : false} svg setIsShow={setIsShow} toPrevStep={toPrevStep}/>
                        <CalculatorStepItem step={4} currentStep={step} setCurrentStep={setStep} active={step >3  ? true : false} setIsShow={setIsShow} toPrevStep={toPrevStep}/>
                    </ul>

                    {step === 1 && <StepOneFormContent basement={basement} wall={wall} roof={roof} open={open} setOpen={setOpen} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow}/>}
                    {step === 2 && <StepTwoFormContent stage={'stage'} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow}/>}
                    {step === 3 && <StepThreeFormContent area={'area'} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} error={error} errorMessage={"Поле обов'язкове для заповнення"}/>}
                    {step === 4 && <StepFourFormContent title={"Вартість вашого будинку"} descr={'Готові замовити або у вас залишилися запитання? Зв’яжіться з нами'} summ={totalBuildSumm} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} />}

                    {step === 1 && 
                        <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={()=>onNextStep('area')} >Далі</button>
                    } 
                    {step !== 1 && step !== 4 &&
                        <div className='flex gap-12-to-32'>
                            <button className={`btn-secondary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={toPrevStep} id={step-1}>Назад</button>
                            <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={()=>onNextStep('area')} >Далі</button>
                        </div>
                    }
                    
                    {step === 4  && 
                        <div className='flex gap-12-to-32'>
                            {/* <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={toPrevStep}  id={step-1}>Назад</button> */}
                            <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={openPopUp} >Зв’язатися з нами</button>
                        </div>
                    }

            </form>


            :
            <form action="" className='calc-form bg-card p-lr-12-to-32 gap-44-to-68 br-16-to-24'>
                    <ul className={`calc-step-wrapper gap-12-to-32  ${typeIsShow ? 'show' : ''}`}>
                        <CalculatorStepItem step={1} currentStep={step} setCurrentStep={setStep} active svg setIsShow={setIsShow}/>        
                        <CalculatorStepItem step={2} currentStep={step} setCurrentStep={setStep} active={step >1  ? true : false} setIsShow={setIsShow}/>
                    </ul>

                    {step === 1 && <StepOneDrillContent material={material} diametr={diametr} deep={deep} count={'count'} open={open} setOpen={setOpen} data={drillData} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} error={error} errorMessage={"Поле обов'язкове для заповнення"}/>}
                    {step === 2 && <StepFourFormContent title={"Вартість послуги з буріння отвору"} descr={'Готові замовити або у вас залишилися запитання? Зв’яжіться з нами'}  summ={totalDrillSumm} data={drillData} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} drill/>}
                    
                    {step !== 2 
                        ?<button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={()=>onNextStep('count')}>Далі</button>
                        :<button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={openPopUp} >Зв’язатися з нами</button>
                    }

            </form>



    )
}

export default CalculatorForm