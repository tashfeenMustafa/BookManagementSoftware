import * as React from 'react';
import Button from '@mui/material/Button';
import SignUpForm from "./SignUpForm"
import { Link } from "react-router-dom"
import './LoginForm.css'

function SignUpPage () {
  return (
    <header className="App-header">
      <h1>Book Management Software</h1>
      <h4>Sign Up For An Account</h4>
      <SignUpForm />
      <Link className="loginButton" to="/login">
        <Button variant="text">Go back to login</Button>
      </Link>
    </header>
  )
}

export default SignUpPage