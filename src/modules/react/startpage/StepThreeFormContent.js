import React,{useRef, useEffect, useState} from 'react';

import Icon from '../IconSprite';

const StepThreeFormContent = ({area, data,updData,  isShow, setIsShow, error, setError,errorMessage})=>{

    

    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])

    return(
        <>
            <h4 className={`calc-form-title ${isShow ? 'show' : ''}`}>Введіть бажану площу будинку</h4>

            <div className={`calc-select-label ${isShow ? 'show' : 'hide'}`} >
                <span className='calc-select-label-text'>Площа, кв.м.</span>
               
                <div className={`calc-select-input-wrapper`}> 

                    <input className={`calc-select-input ${error[area] ? 'error' : ''}`} name={area} id={area} type='number' onChange={(e)=>updData(area,e.target.value)} value={data[area]} placeholder='Enter your text'/>
                    
                    <Icon classlist={`calc-select-input-icon ${error[area] ? 'error' : 'hide'}`} id={`${area}-icon`} name="warning" color="#DD7A02" width="24" height="24"/>

                </div>
                <p className={`error-message ${error[area] ? 'error' : ''}`}>{errorMessage}</p>
                
            </div>
        </>
       
    )
}

export default StepThreeFormContent