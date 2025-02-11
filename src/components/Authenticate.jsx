import React from "react";
import { useState } from "react";

function Authenticate({token}) {
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

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
      {error && <p>{error}</p>}
      {successMsg && <p>{successMsg}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}

export default Authenticate;