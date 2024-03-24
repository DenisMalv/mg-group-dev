import React,{useState,useEffect,useRef} from 'react';

import CalculatorStepItem from './CalculatorStepItem';
import CalculatorSelectBox from './CalculatorSelectBox';

// import useOutsideClick from '../clickOutside';

const CalculatorForm = ({type})=>{
    console.log(type)
    const [step,setStep] = useState(1)
    const [open,setOpen] = useState('')
    const [data,setData] = useState({
        basement:'Бетон',
        wall:'Цегла',
        roof:'Металочерепиця',
        stage:'',
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

                    <h4 className='calc-form-title'>Оберіть матеріал, який бажаєте використати</h4>

                    <div className='calc-select-wrapper'>
                        <CalculatorSelectBox selectName={'basement'} title={'Фундамент'} options={basement} open={open} setOpen={setOpen} data={data} updData={updData}/>
                        <CalculatorSelectBox selectName={'wall'} title={'Стіни'} options={wall} open={open} setOpen={setOpen} data={data} updData={updData}/>
                        <CalculatorSelectBox selectName={'roof'} title={'Покрівля'} options={roof} open={open} setOpen={setOpen} data={data} updData={updData}/>
                    </div>

                    <button className='btn-primary calc-next-step' type='button' >Далі</button>

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