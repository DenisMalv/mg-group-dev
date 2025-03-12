import React,{useRef, useEffect, useState} from 'react';

import Icon from '../IconSprite';

import CalculatorSelectBox from './CalculatorSelectBox';
import FormCheckbox from '../FormCheckbox/FormCheckbox';
// import FormCheckbox from '../FormCheckbox/FormCheckbox'

const coefData = [
    {
        title:'Буріння вище 2 метрів',
        name:'under_two_metres',
        value: 1.2
        
    },
    {
        title:'Буріння у важкодоступних, небезпечних місцях',
        value: 1.15,
        name:'hard_drill',
    },
    {
        title:'Висока армованість',
        value: 1.25,
        name:'high_arm',
    },
    {
        title:'Буріння в бетоні М400',
        value: 1.15,
        name:'m400',
    },
    {
        title:'Буріння в бетоні М500',
        value: 1.25,
        name:'m500',
    },
    {
        title:'Відсутність води на об’єкті',
        value: 1.1,
        name:'no_water',
    },
    {
        title:'Роботи в зимових умовах',
        value: 1.1,
        name:'winter',
    },
    {
        title:'Буріння в нічний час або вихідні, святкові дні',
        value: 1.5,
        name:'holiday',
    },

]


const StepOneDrillContent = ({material, diametr, deep, count, open,setOpen, isShow, setIsShow, data, updData, error, errorMessage })=>{

    useEffect(()=>{
        setTimeout(()=>{setIsShow(true)},20)
    },[])


    return(
        <>
            <h3 className={`calc-form-title ${isShow ? 'show' : ''}`}>Введіть необхідні параметри</h3>

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
                <div  className='coeficient-wrapper'>
                    {
                        coefData.map(el=><FormCheckbox key={el.name} title={el.title} classList=''  name={el.name} checked={data[el.name]} id={el.value} handleChecked={updData} />
                       )
                    }
                </div>
                <ul className='calc-drill-tip'>
                    <li>
                    1.  Вартість буріння розраховується індивідуально, оскільки залежить від кількості отворів, глибини буріння, матеріалу та конструкції.
                    </li>
                    <li>
                    2. Потрібна точка підключення до електромережі на 220V.
                    </li>
                    <li>
                    3. Наявність чистої води.				
                    </li>
                    <li>
                    4. Наявність розмітки для отворів.				 
                    </li>
                    <li>
                    5. Можливість встановити бурову установку.
                    </li>
                </ul>
            </div>
        </>
       
    )
}

export default StepOneDrillContent