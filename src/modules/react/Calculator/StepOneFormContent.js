import React,{useRef, useEffect, useState} from 'react';

import CalculatorSelectBox from './CalculatorSelectBox';

const StepOneFormContent = ({basement,wall,roof,overlap,open,setOpen,data,updData, isShow, setIsShow})=>{

    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])


    return(
        <>
            <h4 className={`calc-form-title ${isShow ? 'show' : ''}`}>Оберіть матеріал, який бажаєте використати</h4>

            <div className={`calc-select-wrapper  ${isShow ? 'show' : ''}`}>
                <CalculatorSelectBox selectName={'basement'} title={'Фундамент'} options={basement} open={open} setOpen={setOpen} data={data} updData={updData}/>
                <CalculatorSelectBox selectName={'wall'} title={'Стіни'} options={wall} open={open} setOpen={setOpen} data={data} updData={updData}/>
                <CalculatorSelectBox selectName={'roof'} title={'Покрівля'} options={roof} open={open} setOpen={setOpen} data={data} updData={updData}/>
                <CalculatorSelectBox selectName={'overlap'} title={'Перекриття'} options={overlap} open={open} setOpen={setOpen} data={data} updData={updData}/>
            </div>
        </>
       
    )
}

export default StepOneFormContent