import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({label,options,selected,onSelectChange}) => {
    
    const [open,setOpen] =  useState(false);
    const ref=useRef();
   
    useEffect(()=>{
      document.body.addEventListener('click',(e)=>{
        if(ref.current.contains(e.target)){
            return;
        } 
        setOpen(false);
      },{capture:true});
    },[])


    const renderedOptions = options.map((option)=>{
       
        if(option.value === selected.value){
            return null;
        }
        
       return (
         <div key={option.value}
          onClick={()=>onSelectChange(option)}
         className="item">
              {option.label}  
         </div>
       ); 
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ?'visible active':''}`}>
                  <i className="dropdown icon"></i>
                   <div className="text">{selected.label}</div> 
                    <div className={`menu ${open ?'visible transition':''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;