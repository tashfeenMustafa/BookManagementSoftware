import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFF',
    },
  },
});

function LoginPage () {
  let handleLoginSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
    <header className="App-header">
      <h1>Book Management Software</h1>
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
        noValidate
        autoComplete="off">
        <div>
          <CssTextField 
            id="outlined-password-input"
            label="Email"
            type="Email"
          />
        </div>
        <div>
          <CssTextField 
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <Link to="/dashboard">
          <Button
            sx={{
              width: '97%',
              height: '45px'
            }} 
            variant="contained"
            onSubmit={handleLoginSubmit}>
            Submit
          </Button>
        </Link>
      </Box>
    </header>
  )
}

export default LoginPage