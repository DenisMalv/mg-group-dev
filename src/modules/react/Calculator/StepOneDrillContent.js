import React,{useRef, useEffect, useState} from 'react';

import Icon from '../IconSprite';

import CalculatorSelectBox from './CalculatorSelectBox';


const StepOneDrillContent = ({material, diametr, deep, count, open,setOpen, isShow, setIsShow, data, updData, error, errorMessage })=>{

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
                        <input className={`calc-select-input ${error[count] ? 'error' : ''}`}  name={count} id={count} type='number' onChange={(e)=>updData(count,e.target.value)} value={data[count]} placeholder='Enter your text'/>
                        <Icon classlist={`calc-select-input-icon ${error[count] ? 'error' : 'hide'}`} id={`${count}-icon`} name="warning" color="#DD7A02" width="24" height="24"/>
                    </div>
                    <p className={`error-message ${error[count] ? 'error' : ''}`}>{errorMessage}</p>
                    
                </div>
            </div>
        </>
       
    )
}

export default StepOneDrillContent