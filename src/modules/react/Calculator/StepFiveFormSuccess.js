import React,{useRef, useEffect, useState} from 'react';

import Icon from '../IconSprite';

const StepFiveFormSuccess = ({title, descr, setIsShow, isShow})=>{

 

    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])

    return(
        <>
            <h3 className={`calc-form-title ${isShow ? 'show' : ''}`}>{title}</h3>
            <p>{descr}</p>

         
        </>
    )
}

export default StepFiveFormSuccess