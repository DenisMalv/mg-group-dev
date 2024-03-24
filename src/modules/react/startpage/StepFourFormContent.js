import React,{useRef, useEffect, useState} from 'react';

const StepFourFormContent = ({summ, data,updData})=>{




    return(
        <>
            <h4 className='calc-form-title'>Вартість вашого будинку</h4>

            <div className='calc-step-four-res-text'>
                <h2>{summ}</h2>
                <p>Готові замовити або у вас залишилися запитання? Зв’яжіться з нами</p>
            </div>
        </>
       
    )
}

export default StepFourFormContent