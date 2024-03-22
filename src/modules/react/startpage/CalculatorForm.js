import React,{useState} from 'react';

const CalculatorForm = ({type})=>{
console.log(type)

    return(
        type === 'build' 
            ?
            <form action="" className='calc-form'>
                    <div className='calc-step'>
                    build
                    </div>
            </form>


            :
            <form action="" className='calc-form'>
                <div className='calc-step'>
                drill
                </div>
            </form>


    )
}

export default CalculatorForm