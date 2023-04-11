import React, {useState} from 'react';
import {checkPassword, validateEmail} from '../../utils/helpers';

export default function Contact() {
  //setting state variables for the contact form's fields
  //setting the default value for these vars to be empty, and setting up a function to change the state of each one
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //this function will handle anytime there is a change to the form
    const handleInputChange = (e) => {
//the target is the event that triggered the change
const {target} = e;
const inputType = target.name;
const inputValue = target.value;

//depending on which input field was changed, we set the value of the attached state variable to the new value of that input area
if(inputType === 'name'){
  setName(inputValue);
} else if(inputType ==='email'){
  setEmail(inputValue);
  if(!validateEmail(email)){
    setErrorMessage('Please enter a valid email address')
  } else {
    setErrorMessage('');
  }
} else if(inputType === 'message'){
  setMessage(inputValue);
}
    }
  //On MouseLeave event - if a user clicks into a field and then moves their mouse away from it -- we want to notify users that the field is required
    const handleMouseLeave = (e) => {
    const {target} = e;
    const inputValue = target.value;

    if(inputValue === ''){
      setErrorMessage('This field is required!')
    }
  }
  //when a user enters a field by clicking in, we want to clear any error messages
    const handleMouseEnter = (e) => {
      setErrorMessage('');
    }

const handleFormSubmit = (e) =>{
  //prevents default behavior of submit button which would refresh page
  e.preventDefault();
}


  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Please fill out the form to contact me:
      </p>
      <form className='form'>
        <label>
          Name:
        <input
            value={name}
            name="name"
            type="text"
            placeholder="name"
            onChange={handleInputChange}
            onMouseLeave = {handleMouseLeave}
            onMouseEnter = {handleMouseEnter}
            required
          />
        </label>
         <label>
          Email:
         <input
            value={email}
            name="email"
            type="email"
            placeholder="email"
            onChange={handleInputChange}
            onMouseLeave = {handleMouseLeave}
            onMouseEnter = {handleMouseEnter}
            required
          />
         </label>
          <label>
            Message:
          <textarea
            value={message}
            name="message"
            type="textarea"
            placeholder="message"
            onChange={handleInputChange}
            onMouseLeave = {handleMouseLeave}
            onMouseEnter = {handleMouseEnter}
            required
          />
          </label>
          <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}