import React from 'react';


const Expand = ({Click, children, title }) => {
    const viewBtn = children === null
   ? (<i className="fas fa-chevron-down"></i>)
   : (<i className="fas fa-chevron-up"></i>);
    
  

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button onClick={Click} className="expand__toggle-btn">
            {viewBtn}
          </button>
        </div>
        {children}
      </div>
    );
};

export default Expand;
