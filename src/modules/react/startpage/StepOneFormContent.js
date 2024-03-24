import React,{useRef, useEffect, useState} from 'react';

import CalculatorSelectBox from './CalculatorSelectBox';

const StepOneFormContent = ({basement,wall,roof,open,setOpen,data,updData})=>{


    return(
        <>
            <h4 className='calc-form-title'>Оберіть матеріал, який бажаєте використати</h4>

            <div className='calc-select-wrapper'>
                <CalculatorSelectBox selectName={'basement'} title={'Фундамент'} options={basement} open={open} setOpen={setOpen} data={data} updData={updData}/>
                <CalculatorSelectBox selectName={'wall'} title={'Стіни'} options={wall} open={open} setOpen={setOpen} data={data} updData={updData}/>
                <CalculatorSelectBox selectName={'roof'} title={'Покрівля'} options={roof} open={open} setOpen={setOpen} data={data} updData={updData}/>
            </div>
        </>
       
    )
}

export default StepOneFormContent