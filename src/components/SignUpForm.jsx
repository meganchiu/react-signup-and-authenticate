import React from "react";
import { useState } from "react";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    // console.log('This is a signup form log message!');

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup');
      const data = response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(event) => {setUsername(event.target.value)}}/>
        </label>
        <label>
          Password: <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm;