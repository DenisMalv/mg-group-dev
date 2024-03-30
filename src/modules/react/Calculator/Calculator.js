import React,{useState} from 'react';

import Illustration from '../IllustrationSprite';

import CalculatorForm from './CalculatorForm';


const Calculator = ({typeCalc,showTabs}) => {
  const [type,setType] = useState(typeCalc)
  const [typeIsShow, setTypeIsShow] = useState(false) // for change form content on change type
  const [isShow,setIsShow] = useState(false) // for change form content on change step

  const setTypeCalculatop=(typeCalc)=>{
        setTypeIsShow(false)
        setIsShow(false)
        setTimeout(()=>{setType(typeCalc)},300)
  }
  
  return (
  <div className='container'> 
    <h2 className='bg-card br-16-to-24 p-lr-12-56 p-tb-16-to-32 mb-44-to-68 '>Розрахувати вартість</h2>

    <div className='calc-wrapper'>
      {showTabs && 
        <div className='calc-type '>
          <label className={`calc-type-label p-tb-12-to-16 br-24-to-20 ${type==='build' ? 'active' : ''}`} htmlFor="calc-build">
            <Illustration  classlist={`calc-type-label-illust`} id={`build-icon`} name="architecture" color="" width="32" height="32" />
              Вартість будинку
            <input onChange={()=>setTypeCalculatop('build')} value={type}  type="radio" name='calc-option' id='calc-build' checked={type==='build'}/>
          </label>
          <label className={`calc-type-label p-tb-12-to-16 br-24-to-20 ${type==='drill' ? 'active' : ''}`} htmlFor="calc-drill">
            <Illustration  classlist={`calc-type-label-illust`} id={`build-icon`} name="diamond-drill" color="" width="44" height="32" />
            Вартість буріння
            <input onChange={()=>setTypeCalculatop('drill')} value={type}  type="radio" name='calc-option' id='calc-drill' checked={type==='drill'}/>
          </label>
        </div>
      }
      <CalculatorForm isShow={isShow} setIsShow={setIsShow} typeIsShow={typeIsShow} setTypeIsShow={setTypeIsShow} type={type} />
    </div>



    {/* <p>Hello, World! {state}</p> */}
    {/* <button onClick={()=>setState(state+1)}>increase</button>
    <button onClick={()=>setState(state-1)}>decrese</button> */}
  </div>)
};

export default Calculator
