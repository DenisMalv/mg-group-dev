import React,{useRef, useEffect, useState} from 'react';

import CalculatorSelectBox from './CalculatorSelectBox';

const StepOneDrillContent = ({material, diametr, deep, count, open,setOpen, isShow, setIsShow, data, updData })=>{

    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])


    return(
        <>
            <h4 className={`calc-form-title ${isShow ? 'show' : ''}`}>Введіть необхідні параметри</h4>

            <div className={`calc-select-wrapper step-two  ${isShow ? 'show' : ''}`}>
                <CalculatorSelectBox selectName={'material'} title={'Матеріал'} options={material} open={open} setOpen={setOpen} data={data} updData={updData} drill/>
                <CalculatorSelectBox selectName={'diametr'} title={'Діаметр, мм'} options={diametr} open={open} setOpen={setOpen} data={data} updData={updData} drill/>
                <CalculatorSelectBox selectName={'deep'} title={'Глибина, мм'} options={deep} open={open} setOpen={setOpen} data={data} updData={updData} drill/>
                <div className={`calc-select-label drill-step-one ${isShow ? 'show' : 'hide'}`} >
                    <span className='calc-select-label-text'>Кількість, шт.</span>
                    <div className='calc-select-input-wrapper' onClick={(e)=>console.log('q')}> 
                        <input className='calc-select-input' name={count} id={count} type='number' onChange={(e)=>updData(count,e.target.value)} value={data[count]}/>
                        {/* <Icon classlist={`calc-select-input-icon ${open === selectName ? 'open' : ''}`} id={`${selectName}-icon`} name="arrow-down" color="transparent" stroke="#5C7065" width="24" height="24"/> */}
                    </div>
                    
                </div>
            </div>
        </>
       
    )
}

export default StepOneDrillContent