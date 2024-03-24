import React,{useRef, useEffect, useState} from 'react';

const StepThreeFormContent = ({area, data,updData,  isShow, setIsShow})=>{

    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])

    return(
        <>
            <h4 className={`calc-form-title ${isShow ? 'show' : ''}`}>Введіть бажану площу будинку</h4>

            <div className={`calc-select-label ${isShow ? 'show' : 'hide'}`} >
                <span className='calc-select-label-text'>Площа, кв.м.</span>
               
                <div className='calc-select-input-wrapper' onClick={(e)=>console.log('q')}> 

                    <input className='calc-select-input' name={area} id={area} type='number' onChange={(e)=>updData(area,e.target.value)} value={data[area]} placeholder='Enter your text'/>
                    {/* <Icon classlist={`calc-select-input-icon ${open === selectName ? 'open' : ''}`} id={`${selectName}-icon`} name="arrow-down" color="transparent" stroke="#5C7065" width="24" height="24"/> */}

                </div>
                
            </div>
        </>
       
    )
}

export default StepThreeFormContent