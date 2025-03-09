import React,{useState,useEffect,useRef} from 'react';

import CalculatorStepItem from './CalculatorStepItem';
import StepOneFormContent from './StepOneFormContent';
import StepTwoFormContent from './StepTwoFormContent';
import StepThreeFormContent from './StepThreeFormContent';
import StepFourFormContent from './StepFourFormContent';
import StepFourFormModalContent from './StepFourFormModalContent';
import StepFiveFormSuccess from './StepFiveFormSuccess';
import StepOneDrillContent from './StepOneDrillContent';

import { openPopUp } from '../../modals/popupModal';

const CalculatorForm = ({type,typeIsShow,setTypeIsShow,isShow,setIsShow})=>{
    // console.log(type)
   
    const [error,setError] = useState({
        area:false,
        count:false,
        name:false,
        phone:false,
    })
    const [step,setStep] = useState(1)
    const [open,setOpen] = useState('')
    const [data,setData] = useState({
        basement:'Фундамент і чорнова підлога',
        wall:'Цегла',
        roof:'Металочерепиця',
        overlap:'З/б плити',
        stage:1,
        area:'',
        name:'',
        phone:'',
        total:''
    })
    const [drillData,setDrillData] = useState({
        material:'Бетон',
        diametr:'62',
        deep:100,
        count:1,
        under_two_metres:false,
        hard_drill:false,
        high_arm:false,
        m400:false,
        m500:false,
        no_water:false,
        winter:false,
        holiday:false,
        name:'',
        phone:'',
        total:''
    })


    const basement = ['Фундамент і чорнова підлога','Фундамент']
    const wall = ['Цегла','Газобетон',]
    const roof = ['Металочерепиця','Бітумна черепиця']
    const overlap = ["Дерев'яне",'З/б плити']

    const material = ['Цегла','Газобетон','Силікатна цегла','Бетон','Залізобетон','Граніт']
    const diametr = [62,82,102,112,132,162,202,252,302]
    const deep = [100,200,300,400,500,600,700,800,900,1000]
    

    const onChangeInput = (name,value) =>{
        if(value !== ''){
            setError({...error,[name]:false})
        }
        // console.log(name,' ',drillData.under_two_metres)



        if(name==='deep' && value === 'більше 2000'){
            setDrillData((prev)=>({...prev, [name]:value, under_two_metres: true}))
            return
        }
        if(name==='under_two_metres' && value === false){
            setDrillData((prev)=>({...prev, deep:100, under_two_metres: false}))
            return
        }
        if(name==='under_two_metres' && value === true){
            setDrillData((prev)=>({...prev, deep:'більше 2000', under_two_metres: true}))
            return
        }

        type === 'build' 
            ? setData({...data,[name]:value})
            : setDrillData({...drillData,[name]:value})
    }

    const toPrevStep=(e)=>{
        // console.log(e)
        if(step <= 1 ) return

        if(e.target.id && step > +e.target.id){
            setIsShow(false)
            setTimeout(()=>{setStep(+e.target.id)},300)
        }

    }
    

    const onNextStep = (name)=>{
        if(step >= 4)return
        if(type ==='build' && step===3 && data[name] === ''){
            setError({...error,[name]:true})
            return
        }
        if(type ==='build' && step===3){
            setData((prevState)=>({...prevState,total:normalizeSum(totalBuildSumm)}))

        }

        if(type ==='drill' && (drillData[name] === '' || drillData[name] < 1)){
            setError({...error,[name]:true})
            return
        }
        if(type ==='drill' && step === 1) {
            setDrillData((prevState)=>({...prevState,total:normalizeSum(totalDrillSumm)}))

        }
        
        setIsShow(false)
        setTimeout(()=>{
            setStep(step+1)
        },300)
        
    }

    const onSubmit = (names, data, )=>{
        const nameRegex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-]{2,}$/;
        const phoneRegex = /^(?:\+?380|80|0)\d{9}$/;
        // const phoneRegex = /^(\+?\d{1,3})?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3}[-.\s]?\d{2,4}$/;
        // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!nameRegex.test(data[names[0]]) || !phoneRegex.test(data[names[1]?.trim()])){
            names.forEach(el =>{
                if(el ==='name'){
                    nameRegex.test(data[el])
                        ?  setError((prevState)=>({...prevState,[el]:false}))
                        :   setError((prevState)=>({...prevState,[el]:true}))
                }
                if(el ==='phone'){

                    phoneRegex.test(data[el]?.trim())
                        ? setError((prevState)=>({...prevState,[el]:false}))
                        : setError((prevState)=>({...prevState,[el]:true}))
                }
               
              
            })
            return

        }


        
        
        setIsShow(false)
        setTimeout(()=>{
            setStep(step+1)
        },300)

        console.log('data',data)
        console.log('drillData',drillData)
    }

    const buildPrises = {
        'Фундамент і чорнова підлога':135,
        'Фундамент':80,

        'Цегла':125,
        'Газобетон':100,

        'Металочерепиця':90,
        'Бітумна черепиця':110,

        "Дерев'яне":40,
        'З/б плити':65,

        '1':1,
        '2':0.7,


    }
    const drillPrises =[

        {
            name:'Цегла',
            62:12,
            82:18,
            102:25,
            112:28,
            132:30,
            162:35,
            202:40,
            252:45,
            302:50,
        },
        {
            name:'Газобетон',
            62:12,
            82:18,
            102:25,
            112:28,
            132:30,
            162:35,
            202:40,
            252:45,
            302:50,
        },
        {
            name:'Силікатна цегла',
            62:18,
            82:22,
            102:28,
            112:30,
            132:35,
            162:40,
            202:45,
            252:50,
            302:55,
        },
        {
            name:'Бетон',
            62:18,
            82:22,
            102:28,
            112:30,
            132:35,
            162:40,
            202:45,
            252:50,
            302:55,
        },
        {
            name:'Залізобетон',
            62:25,
            82:30,
            102:35,
            112:38,
            132:40,
            162:45,
            202:50,
            252:55,
            302:60,
        },
    ]

    const normalizeSum=(summ)=>{
        const numberString = "" + summ()
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " $";
    }

    const totalBuildSumm = () =>{

        const numberArea = +data['area']
        
        // let basement = 0
        // console.log(data['basement'])
        // if(data['basement'] === 'Фундамент і чорнова підлога' || data['basement'] === 'Фундамент'){
        //     basement =  buildPrises['Фундамент і чорнова підлога'] + buildPrises['Залізобетон']
        // } else {
        //     basement =  buildPrises[data['basement']]
        // }

        const basement = buildPrises[data['basement']]
        const wall = buildPrises[data['wall']]
        const roof = buildPrises[data['roof']]
        const overlap = buildPrises[data['overlap']]
        const stage = buildPrises[data['stage']]
        
        return Math.round((basement+wall+roof+overlap)*stage*numberArea)
    }
    const totalDrillSumm = () =>{

        const diametrPrice = drillPrises.find(el=>el.name === drillData['material'])[drillData.diametr]
        const deep = drillData['deep']
        const count = +drillData['count']
        const underTwoMetres = drillData.under_two_metres ? 1.2 : 1
        const hardDrill = drillData.hard_drill ? 1.15 : 1
        const highArm = drillData.high_arm ? 1.25 : 1
        const m_400 = drillData.m400 ? 1.15 : 1
        const m_500 = drillData.m500 ? 1.25 : 1
        const noWater = drillData.no_water ? 1.1 : 1
        const winter = drillData.winter ? 1.1 : 1
        const holiday = drillData.no_water ? 1.5 : 1

        console.log(deep)

        
        return Math.round(diametrPrice*count*underTwoMetres*hardDrill*highArm*m_400*m_500*noWater*winter*holiday)
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
            <form action="#" className='calc-form bg-card p-lr-12-to-32 gap-44-to-68 br-16-to-24' onSubmit={(e)=>{e.preventDefault();}}>
                    
                    <ul className={`calc-step-wrapper gap-12-to-32  ${typeIsShow ? 'show' : ''}`}>
                        <CalculatorStepItem step={1} currentStep={step} setCurrentStep={setStep} active svg setIsShow={setIsShow} toPrevStep={toPrevStep}/>
                        <CalculatorStepItem step={2} currentStep={step} setCurrentStep={setStep} active={step >1   ? true : false} svg setIsShow={setIsShow} toPrevStep={toPrevStep}/>
                        <CalculatorStepItem step={3} currentStep={step} setCurrentStep={setStep} active={step >2  ? true : false} svg setIsShow={setIsShow} toPrevStep={toPrevStep}/>
                        <CalculatorStepItem step={4} currentStep={step} setCurrentStep={setStep} active={step >3  ? true : false} setIsShow={setIsShow} />
                    </ul>

                    {step === 1 && <StepOneFormContent basement={basement} wall={wall} roof={roof} overlap={overlap} open={open} setOpen={setOpen} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow}/>}
                    {step === 2 && <StepTwoFormContent stage={'stage'} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow}/>}
                    {step === 3 && <StepThreeFormContent area={'area'} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} error={error} errorMessage={"Поле обов'язкове для заповнення"}/>}
                    {/* {step === 4 && <StepFourFormContent title={"Вартість вашого будинку"} descr={'Готові замовити або у вас залишилися запитання? Зв’яжіться з нами'} summ={totalBuildSumm} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} />} */}
                    {step === 4 && <StepFourFormModalContent  descr={'Готові замовити або у вас залишилися запитання? Зв’яжіться з нами'} name={'name'} phone={'phone'} data={data} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} error={error} errorMessage={"Поле обов'язкове для заповнення"} />}
                    {step === 5 && <StepFiveFormSuccess title={"Дякуємо за заявку"} descr={'Найближчим часом з вами звʼяжемось'} isShow={isShow} setIsShow={setIsShow} />}

                    {step === 1 && 
                        <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={()=>onNextStep('area')} >Далі</button>
                    } 
                    {step !== 1 && step !== 4 && step !== 5 &&
                        <div className='flex gap-12-to-32'>
                            <button className={`btn-secondary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={toPrevStep} id={step-1}>Назад</button>
                            <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={()=>onNextStep('area')} >Далі</button>
                        </div>
                    }
                    
                    {step === 4  &&  
                        <div className='flex gap-12-to-32'>
                         
                            <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={()=>onSubmit(['name','phone'],data)} >Замовити консультацію</button>
                        </div>
                    }
                    {/* {step === 4  && 
                        <div className='flex gap-12-to-32'>
                         
                            <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={openPopUp} >Зв’язатися з нами</button>
                        </div>
                    } */}
                    {/* {step === 4 && <p className='price-tip'>* Наведено приблизні розрахунки, точна вартість може незначно відрізнятися і залежить від особливостей проєкту.</p>} */}


            </form>


            :
            <form action="#" className='calc-form bg-card p-lr-12-to-32 gap-44-to-68 br-16-to-24'>
                    <ul className={`calc-step-wrapper gap-12-to-32  ${typeIsShow ? 'show' : ''}`}>
                        <CalculatorStepItem step={1} currentStep={step} setCurrentStep={setStep} active svg setIsShow={setIsShow} toPrevStep={toPrevStep}/>        
                        <CalculatorStepItem step={2} currentStep={step} setCurrentStep={setStep} active={step >1  ? true : false} setIsShow={setIsShow} />
                    </ul>

                    {step === 1 && <StepOneDrillContent material={material} diametr={diametr} deep={deep} count={'count'} open={open} setOpen={setOpen} data={drillData} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} error={error} errorMessage={"Поле обов'язкове для заповнення"}/>}
                    {step === 2 && <StepFourFormModalContent descr={'Готові замовити або у вас залишилися запитання? Зв’яжіться з нами'} name={'name'} phone={'phone'} data={drillData} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} error={error} errorMessage={"Поле обов'язкове для заповнення"} />}
                    {step === 3 && <StepFiveFormSuccess title={"Дякуємо за заявку"} descr={'Найближчим часом з вами звʼяжемось'} isShow={isShow} setIsShow={setIsShow} />}
                    {/* {step === 2 && <StepFourFormContent title={"Вартість послуги з буріння отвору"} descr={'Готові замовити або у вас залишилися запитання? Зв’яжіться з нами'}  summ={totalDrillSumm} data={drillData} updData={onChangeInput} isShow={isShow} setIsShow={setIsShow} drill/>} */}

                    
                    {step !== 2  && step !== 3 &&
                        <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={()=>onNextStep('count')}>Далі</button>
                       
                        // :<button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={openPopUp} >Зв’язатися з нами</button>
                    }
                    {step !== 1 && step !== 3 &&  <button className={`btn-primary calc-next-step  ${typeIsShow ? 'show' : ''}`} type='button' onClick={()=>onSubmit(['name','phone'],drillData)} >Зв’язатися з нами</button>}
                   {/* {step === 2 && <p className='price-tip'>* Наведено приблизні розрахунки, точна вартість може незначно відрізнятися і залежить від особливостей проєкту.</p>} */}
            </form>



    )
}

export default CalculatorForm