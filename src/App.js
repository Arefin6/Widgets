import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Search from './components/Search'; 
import Translate from './components/Translate';
import Route from './Route';

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
    
     const [selected,setSelected] = useState(options[0])

    return (
        
        <div className="ui container">
          <Header></Header>
            <Route path="/">
              <Accordion items={items}></Accordion> 
            </Route>
            <Route path="/list">
             <Search></Search> 
            </Route>
            <Route path="/dropdown">
             <Dropdown
             label="Select a Color"
             options={options}
             selected={selected}
             onSelectChange={setSelected}
             ></Dropdown>
            </Route>
            <Route path="/translate">
             <Translate></Translate> 
            </Route>
        </div>
    );
};

export default App;