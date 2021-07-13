import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options=[
    {
      label:'African',
      value:'af'  
    },
    {
      label:'Arabic',
      value:'ar'  
    },
    {
        label:'Bengali',
        value:'bn'  
    },
    {
       label:'Hindi',
       value:'hi'  
     }
        
   ];
 
//    

const Translate = () => {
    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text:</label>
                    <input type="text" value={text} onChange={(e)=>setText( e.target.value)} />
                </div>
            </div>
            <Dropdown
            label="Select a Language"
            options={options}
            selected={language}
            onSelectChange={setLanguage}
            ></Dropdown>
            <hr />
            <h3 className="ui header">output</h3>
            <Convert text={text} language={language} ></Convert>
        </div>
    );
};

export default Translate;