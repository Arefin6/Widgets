import React from 'react';

const Link = ({className,href,children}) => {
    const clickMe = (e) =>{
      window.history.pushState({},'',href)  
      e.preventDefault();
      
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent)
    }
    
    return (
        <a onClick={clickMe} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;