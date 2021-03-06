import * as React from 'react';
import Button from '@mui/material/Button';
import LoginForm from "./LoginForm"
import { Link } from "react-router-dom"
import './LoginForm.css'

function LoginPage () {
  return (
    <header className="App-header">
      <h1>Book Management Software</h1>
      <h4>Login to your Account</h4>
      <LoginForm />
      <Link className="loginButton" to="/signup">
        <Button variant="text">Sign Up for an account</Button>
      </Link>
    </header>
  )
}

export default LoginPage