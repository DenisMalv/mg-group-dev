import React,{useState} from 'react';

import CalculatorForm from './CalculatorForm';


const Calculator = () => {
  const [type,setType] = useState('build')

  
  return (
  <div className='container'> 
    <h2 className='bg-card br-16-to-24 p-lr-12-56 p-tb-16-to-32 mb-44-to-68 '>Розрахувати вартість</h2>

    <div className='calc-wrapper'>
      <div className='calc-type '>
        <label className={`calc-type-label p-tb-12-to-16 br-24-to-20 ${type==='build' ? 'active' : ''}`} htmlFor="calc-build">Build
          <input onChange={()=>setType('build')} value={type}  type="radio" name='calc-option' id='calc-build' checked={type==='build'}/>
        </label>
        <label className={`calc-type-label p-tb-12-to-16 br-24-to-20 ${type==='drill' ? 'active' : ''}`} htmlFor="calc-drill">Drill
          <input onChange={()=>setType('drill')} value={type}  type="radio" name='calc-option' id='calc-drill' checked={type==='drill'}/>
        </label>
      </div>
      <CalculatorForm type={type} />
    </div>



    {/* <p>Hello, World! {state}</p> */}
    {/* <button onClick={()=>setState(state+1)}>increase</button>
    <button onClick={()=>setState(state-1)}>decrese</button> */}
  </div>)
};

export default Calculator
