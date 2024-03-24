import React,{useRef, useEffect, useState} from 'react';

const StepFourFormContent = ({title, descr, summ, data,updData, isShow, setIsShow, drill})=>{

    const normalizeSum=()=>{
        const numberString = ""+summ
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])


    return(
        <>
            <h4 className={`calc-form-title ${isShow ? 'show' : ''}`}>{title}</h4>
            
            <div className={`calc-step-four-res-text ${isShow ? 'show' : ''}`}>
                <h2>{normalizeSum()} {drill ? 'грн' : '$'}</h2>
                <p>{descr}</p>
            </div>
        </>
       
    )
}

export default StepFourFormContent