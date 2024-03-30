import React,{useRef, useEffect, useState} from 'react';

// import h1x1 from '../../../img/calculator/step-two-h-1.webp'
// import h1x2 from '../../../img/calculator/step-two-h-1@2x.webp'
// import h2x1 from '../../../img/calculator/step-two-h-2.webp'
// import h2x2 from '../../../img/calculator/step-two-h-2@2x.webp'


const StepTwoFormContent = ({stage, data,updData, isShow, setIsShow})=>{


    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])

    return(
        <>
            <h4 className={`calc-form-title ${isShow ? 'show' : ''}`}>Виберіть кількість поверхів будинку</h4>

            <ul className={`calc-select-wrapper step-two ${isShow ? 'show' : ''}`}>
                <li className={`step-two-item ${data[stage] == 1 ? 'active' : ''}`}  onClick={()=>updData(stage,'1')}>
                    <picture >
                        <source srcSet={`assets/img/calculator/step-two-h-1.webp 1x, assets/img/calculator/step-two-h-1@2x.webp  2x`} />
                        <img width="423" height="242" src="#" alt="house" title="mggroup" className={`step-two-picture br-20`} />
                    </picture>
                    {/* <img src="" alt="" title='' /> */}
                    <p className='step-two-picture-descr'>Одноповерховий</p>
                </li>
                <li className={`step-two-item ${data[stage] == 2 ? 'active' : ''}`}  onClick={()=>updData(stage,'2')}>
                    <picture width="300" height="300">
                        <source srcSet={`assets/img/calculator/step-two-h-2.webp  1x, assets/img/calculator/step-two-h-2@2x.webp  2x`} />
                        <img width="423" height="242" src="#" alt="house" title="mggroup" className={`step-two-picture br-20`}  />
                    </picture>
                    {/* <img src="" alt="" title=''/> */}
                    <p className='step-two-picture-descr'>Двоповерховий</p>
                </li>
            </ul>
        </>
       
    )
}

export default StepTwoFormContent