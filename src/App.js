import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search'; 
import Translate from './components/Translate';

const items=[
  {
    title:'What is React?',
    content:'React is A Javascript Library'  
  },
  {
     title:'Why use React?',
     content:'React is Favorite  Javascript Library Among Engineers'  
   },
   {
     title:'How do you use React?',
     content:'You use React by creating components'  
   }
      
 ];

 const options=[
   {
     label:'The Color Red',
     value:'red'  
   },
   {
     label:'The Color Green',
     value:'green'  
   },
    {
      label:'The Shade of Blue',
      value:'blue'  
    }
       
  ];

const App = () => {
    
     

    return (
        <div className="ui container">
            <Translate></Translate>
        </div>
    );
};

export default App;