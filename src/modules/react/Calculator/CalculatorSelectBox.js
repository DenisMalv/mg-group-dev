import React,{useRef, useEffect, useState} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import Icon from '../IconSprite';

const CalculatorSelectBox = ({selectName,title,options,open,setOpen,data,updData,drill})=>{

    // const componentRef = useRef(null)
    const dropdownRef= useRef(null);

    const toggleDropdown = (e,name) => {
        e.stopPropagation()
        if(open === name){
            setOpen('')
            return
        }
        setOpen(name);

    };

    const onSelect = (e)=>{
        if(e.target.nodeName !== "LI")return

        updData(selectName,e.target.dataset.value)  
    }



    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen('')
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [open]);



    return(
       
            <label htmlFor={selectName} className={`calc-select-label ${drill ? 'drill-step-one' : ''}`} >
                <span className='calc-select-label-text'>{title}</span>
               
                <div className='calc-select-input-wrapper' onClick={(e)=>toggleDropdown(e,selectName)}> 

                    <input className='calc-select-input' name={selectName} id={selectName} type='text' value={selectName !== 'material' && drill ? `${data[selectName]}` : data[selectName]} readOnly/>
                    <Icon classlist={`calc-select-input-icon ${open === selectName ? 'open' : ''}`} id={`${selectName}-icon`} name="arrow-down" color="transparent" stroke="#5C7065" width="24" height="24"/>

                </div>
                <div className='scroll-wrapper'>
                    <ul ref={dropdownRef}  className={`calc-select-dropdown  ${open === selectName ? 'open' : ''}`}  onClick={(e)=>onSelect(e)}>
                        {
                            options.filter(el=>el !== data[selectName]).map((el)=><li key={el} data-value={el} className='calc-select-dropdown-item'>{selectName !== 'material' && drill ? `${el}` : el}</li>)
                        }
                    </ul>
                </div>
            </label>
       
    )
}

export default CalculatorSelectBox