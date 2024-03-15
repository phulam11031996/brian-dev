import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const urlPrefix = "http://localhost:8000/login";

const SecondPage = () => {
  const [number, setNumber] = useState<number | "">("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // NOTE:
    // console.log(number);

    try {
      const response = await fetch(`${urlPrefix}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number }),
      });

      if (response.ok) {
        // API call successful, navigate to another page
        navigate("/third-page");
      } else {
        // API call failed, handle the error
        console.error(response);
        alert(response)
      }
    } catch (error) {
      console.error(error);
      alert(error)
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setNumber(value === "" ? "" : parseInt(value, 10));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100svw",
        height: "100svh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="number">Enter a number:</label>
          <input
            type="text"
            id="number"
            value={number !== "" ? number.toString() : ""}
            onChange={handleNumberChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/">
        <button>Go to First Page</button>
      </Link>
    </div>
  );
};

export default SecondPage;
