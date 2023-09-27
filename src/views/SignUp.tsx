import { useState } from 'react';
import Navbar from '../components/Navbar';

interface Props {

}

function SignUp() {
  function handleSubmit() {
    console.log("submitted");
  }
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <form onSubmit={handleSubmit}
        method="GET"
        className="signup-form">
          <input type="email"
          placeholder="Email"
          id="signup-input-email"/>

          <input type="text"
          placeholder="Username"
          id="signup-input-username"/>

          <input type="password"
          placeholder="Password"
          id="signup-input-password1"/>

          <input type="password"
          placeholder="Confirm Password"
          id="signup-input-password2"/>

          <button type="submit" id="signup-input-submit">Submit</button>
        </form>
      </div>
    </>
      );
}

export default SignUp; 
