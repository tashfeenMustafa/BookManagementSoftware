import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#FFF',
  },
  '& .MuiInputLabel-root': {
    color: '#FFF'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FFF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFF',
    },
    '&: hover fieldset': {
      borderColor: 'green',
    },
    '& .Mui-focused fieldset': {
      borderColor: '#FFF',
    },
    '& .MuiOutlinedInput-input': {
      color: '#FFF',
    },
  },
});

export default function LoginForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [message, setMessage] = useState(null)
  const [emailValidated, setEmailValidated] = useState(false)

  useEffect(() => {
    localStorage.setItem('user', email)
  }, [email])

  let handleLoginSubmit = (event) => {
    if (!email || !password) {
      setMessage('Enter your email and password')
      event.preventDefault()
    }
    else {
      setMessage('Signup successful!')
      console.log(email, password)
    }
  }

  let handleEmailChange = (event) => {
    if (message) {
      setMessage(null)
    }
    setEmail(event.target.value)
    handleEmailValidation(event.target.value)
  }

  let handlePasswordChange = (event) => {
    if (message) {
      setMessage(null)
    }
    setPassword(event.target.value)
  }

  let handleRetypePasswordChange = (event) => {
    if (message) {
      setMessage(null)
    }
    setRetypePassword(event.target.value)
  }

  // Later validate on the server
  let handleEmailValidation = ( email ) => {

    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(email) ) {
        // this is a valid email address
        // call setState({email: email}) to update the email
        // or update the data in redux store.
        setEmailValidated(true)
        setMessage(null)
    }
    else {
        // invalid email, maybe show an error to the user.
        setMessage('Input a valid email address')
    }

}

  return (
      <Box
      component="form"
      sx={{
            '& .MuiTextField-root': { 
            m: 1, 
            width: '25ch', 
            color: 'white', 
            border: '#FFF' 
          },
      }}
      autoComplete="off">
      {message ? <p> {message} </p> : ''}
      <div>
        <CssTextField 
          id="outlined-email-input"
          label="Email"
          type="email"
          validate={emailValidated.toString()}
          value={email} 
          onChange={handleEmailChange} />
      </div>
      <div>
        <CssTextField 
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password" 
          value={password}
          onChange={handlePasswordChange} />
      </div>
      <div>
        <CssTextField 
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password" 
          value={retypePassword}
          onChange={handleRetypePasswordChange} />
      </div>
      <Link className="loginButton" to={`/dashboard`}>
        <Button
          sx={{
          width: '97%',
          height: '45px'
          }} 
          variant="contained"
          onClick={handleLoginSubmit}>
          Submit
        </Button>
      </Link>
    </Box>
  )
}