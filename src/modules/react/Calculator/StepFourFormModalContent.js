import React,{useRef, useEffect, useState} from 'react';

import Icon from '../IconSprite';

const StepFourFormModalContent = ({title, descr, data,updData, isShow, setIsShow, name, phone, error, setError,errorMessage})=>{

 

    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])

    return(
        <>
            {/* <h4 className={`calc-form-title ${isShow ? 'show' : ''}`}>{title}</h4> */}
            <p>{descr}</p>

           <div className='calc-select-wrapper' style={{opacity:1}}>
                <div className={`calc-select-label ${isShow ? 'show' : 'hide'}`} >
                    <span className='calc-select-label-text'>Ім’я</span>
                
                    <div className={`calc-select-input-wrapper`}> 

                        <input className={`calc-select-input ${error[name] ? 'error' : ''}`} name={name} id={name} type='text' onChange={(e)=>updData(name,e.target.value)} value={data[name]} placeholder='Введіть ваше ім’я' autoComplete='off'/>
                        
                        <Icon classlist={`calc-select-input-icon ${error[name] ? 'error' : 'hide'}`} id={`${name}-icon`} name="warning" color="#DD7A02" width="24" height="24"/>

                    </div>
                    <p className={`error-message ${error[name] ? 'error' : ''}`}>{errorMessage}</p>
                    
                </div>
                <div className={`calc-select-label ${isShow ? 'show' : 'hide'}`} >
                    <span className='calc-select-label-text'>Телефон</span>
                
                    <div className={`calc-select-input-wrapper`}> 

                        <input className={`calc-select-input ${error[phone] ? 'error' : ''}`} name={phone} id={phone} type='tel' onChange={(e)=>updData(phone,e.target.value)} value={data[phone]} placeholder='Куди вам подзвонити' autoComplete='off'/>
                        
                        <Icon classlist={`calc-select-input-icon ${error[phone] ? 'error' : 'hide'}`} id={`${phone}-icon`} name="warning" color="#DD7A02" width="24" height="24"/>

                    </div>
                    <p className={`error-message ${error[phone] ? 'error' : ''}`}>{'Введіть номер телефону у форматі +380123456789'}</p>
                    
                </div>
            </div>
        </>
    )
}

export default StepFourFormModalContent