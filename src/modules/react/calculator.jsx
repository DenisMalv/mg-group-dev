import React,{useState} from 'react';
console.log(123)


const Calculator = () => {
  const [state,setState] = useState(0)

  
  return (
  <div className='container'> 
    <h2 className='bg-card br-16-to-24 p-lr-12-56 p-tb-16-to-32 mb-44-to-68 '>Розрахувати вартість</h2>
    <div>
      <input type="radio" />
    </div>
    <p>Hello, World! {state}</p>
    <button onClick={()=>setState(state+1)}>increase</button>
    <button onClick={()=>setState(state-1)}>decrese</button>
  </div>)
};

export default Calculator;