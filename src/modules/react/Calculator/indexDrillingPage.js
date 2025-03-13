import React from 'react';
import ReactDOM from 'react-dom/client';

import Calculator from './Calculator'

setTimeout(() => {
document.addEventListener('DOMContentLoaded',()=>{
const root = ReactDOM.createRoot(document.getElementById('calculator'));
root.render(<Calculator typeCalc={'drill'} />);
},1000)
})