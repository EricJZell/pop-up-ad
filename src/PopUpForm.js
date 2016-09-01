import React from 'react';
import FormButton from './FormButton'
import FormInputText from './FormInputText'

const PopUpForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="row collapse">
        <div className="small-10 small-centered columns">
          <FormInputText />
          <FormButton />
        </div>
      </div>
    </form>
  );
};


export default PopUpForm;
