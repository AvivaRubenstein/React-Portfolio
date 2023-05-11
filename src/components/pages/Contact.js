import React, {useState, useRef} from 'react';
import {validateEmail} from '../../utils/helpers';
import {colors} from '../../utils/helpers';
import emailjs from '@emailjs/browser';;

const styles = {
  container: {
    flex: true,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  textareaStyle: {
    resize: 'vertical',
    borderRadius: '10px'
  },
  inputStyle: {
    borderRadius: '10px',
  },
  formStyle: {
    backgroundColor: colors['Uranian-Blue'],
    borderRadius: '10px',
  },
  button : {
    borderRadius: '20px',
    backgroundColor: colors['Atomic-tangerine']
  },
  resetButton: {
    borderRadius: '20px',
    backgroundColor: colors['Carribean-Current'],
    color: colors['Baby-powder'],
    padding: '10px',
  },
  resetBackground: {
    backgroundColor: colors['Uranian-Blue'],
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'wrap'
  },
  br: {
    width: '100%'
  }
}

export default function Contact() {

  //setting state variables for the contact form's fields
  //setting the default value for these vars to be empty, and setting up a function to change the state of each one
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSent, setSentStatus] = useState(false);

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
  //using validateEmail functionality from utils to display error message when email formatting is not followed
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

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if(validateEmail(email) && name !== '' && message !==''){
          setErrorMessage("");
        emailjs.sendForm('service_98fqqkr', 'template_03lv8oq', form.current, '-ltaEEJ40lRC8n0Od')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setSentStatus(true);
      }
      else {
        setErrorMessage("Please fill out all of the fields before submitting!")
      }
    } 

    const resetForm = (e) => {
      e.preventDefault();
      setSentStatus(false);
    }

    if(formSent === true){
      return (
        <div className="container" style={styles.container}>
          <div className="container" style={styles.resetBackground}>
          <h1>Thank you for contacting me!  I will get back to you via email as soon as possible.</h1>
          <br style={styles.br}></br>
          <h3>To submit another message, click the button below.</h3>
          <br style={styles.br}></br>
          <button type="button" id="reset-btn" style={styles.resetButton} onClick={resetForm}> Write another message</button>
          </div>
        </div>
      )
    }


  return (
    <div className="container" style={styles.container}>
      <h1>Contact Page</h1>
      <p>
        Please fill out the form to contact me:
      </p>
      <div className="container" style={styles.formStyle}>
      <div className="row" >
      <form className='form' style={styles.container} ref={form} onSubmit={sendEmail}>
        <div className="col m-2 p-2">
        <label>
          Name:
          <div>

          </div>
        <input
            style={styles.inputStyle}
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
        </div>
        <div className="col m-2 p-2">
         <label>
          Email:
          <div>

          </div>
         <input
            style={styles.inputStyle}
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
         </div>
         <div className="col m-2 p-2">
          <label>
            Message:
            <div>

            </div>
          <textarea 
            style={styles.textareaStyle}
            id="message"
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
          </div>
          <div className="col m-2 p-2">
          <button type="button" style={styles.button} onClick={sendEmail}>Submit</button>
          </div>
      </form>
      </div>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text text-danger">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}