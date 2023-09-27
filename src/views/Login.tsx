import { useState } from 'react';
import Navbar from '../components/Navbar';



interface Props {

}

function Login() {
  function handleSubmit() {
    console.log("submitted");
  }
  return (
    <>
      <Navbar />
      <div className="login-container">
          <form onSubmit={handleSubmit}
          method="GET"
          className="login-form">

            <div className="login-heading"><h2>Log In</h2></div>

            <input type="text"
            placeholder="Username"
            id="login-input-username" />

            <input type="password"
            placeholder="Password"
            id="login-input-password" />

            <button type="submit" id="login-submit">Submit</button>
          </form>
      </div>
    </>
      );
}


export default Login; 
