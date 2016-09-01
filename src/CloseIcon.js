import React from 'react';


const CloseIcon = props => {
  return (
    <div className="row">
      <span className="close-icon" onClick={props.handleClick}>&#10006;</span>
    </div>
  );
};


export default CloseIcon;
