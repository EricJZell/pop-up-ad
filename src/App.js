import React from 'react';
import PopUpForm from './PopUpForm';
import CloseIcon from './CloseIcon';

const App = props => {
  let handleFormSubmit = event => {
    event.preventDefault();
    var r = confirm('Are you sure?');
  };

  let handleClick = event => confirm('Are you sure?');

  return (
    <div className="row main-div">
      <CloseIcon handleClick={handleClick}/>
      <h3 className="title-font">You have won tickets to see Taylor Swift</h3>
      <p> Please enter your email so we can send you the tickets </p>
      <PopUpForm handleFormSubmit={handleFormSubmit} />
    </div>
  );

}

export default App;
