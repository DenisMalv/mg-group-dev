import React from 'react';
import ReactDOM from 'react-dom/client';

import Calculator from './Calculator'



const root = ReactDOM.createRoot(document.getElementById('calculator'));
root.render(<Calculator typeCalc={'build'}  />);