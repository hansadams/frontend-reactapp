import React, { useState } from 'react';
import Auth from '../../../util/AuthController'
import {Navigate} from "react-router-dom"
import NavBar from '../../components/NavBar';

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await Auth.loginUser({
      email,
      password
    });
    const token = response.access_token
    setToken(token)
    localStorage.setItem("token", token);
  }

  if (localStorage.getItem("token")) {
    return <Navigate to="/admin" />;
  }

  


  return (
    <>

    <NavBar/>
<main>
<div className='container'>
  <div className='row justify-content-center '>
  <div className="col-8">
    <form onSubmit={handleSubmit}>
  {/* Email input */}
  <h1 className='text-center'>LOG IN</h1>
  <div className="form-outline mb-4">
    <input type="email" name="username" className="form-control" onChange={e => setEmail(e.target.value)} />
    <label className="form-label " htmlFor="form2Example1">
      Email address
    </label>
  </div>
  {/* Password input */}
  <div className="form-outline mb-4">
    <input type="password" name="password" className="form-control" onChange={e => setPassword(e.target.value)} />
    <label className="form-label" htmlFor="form2Example2">
      Password
    </label>
  </div>

  {/* Submit button */}
  <button type="submit" className="btn btn-primary btn-block mb-4">
    Sign in
  </button>
</form></div></div></div>
</main>
</> 
  );
}