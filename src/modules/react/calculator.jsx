import React,{useState} from 'react';
console.log(123)


const Calculator = () => {
  const [state,setState] = useState(0)

  
  return (
  <div className='container'> 
    <h2 className='bg-card'></h2>
    <p>Hello, World! {state}</p>
    <button onClick={()=>setState(state+1)}>increase</button>
    <button onClick={()=>setState(state-1)}>decrese</button>
  </div>)
};

export default Calculator;