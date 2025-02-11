import React from "react";
import { useState } from "react";

function Authenticate({token}) {
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [username, setUsername] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
        {
          method: "GET",
          headers: {          
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setSuccessMsg(data.message);

        {/* Unable to display username, because it seems like 
        when the response is returned, the username of the data 
        property is missing entirely. */}
        setUsername(data.data.username);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {error && <p id="authError">{error}</p>}
      {successMsg && <p id="authSuccess">{successMsg}</p>}
      {/* Unable to display username, because it seems like 
      when the response is returned, the username of the data 
      property is missing entirely. */}
      {username && <h3>Welcome, {username}!</h3>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}

export default Authenticate;