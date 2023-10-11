import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleSignup = async () => {
    const payload = {
      email,
      password,
    };
    const res = await fetch("https://password-reset-ay3q.onrender.com/user/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.token) {
      setErr("");
      localStorage.setItem("token", data.token);
      alert("Signup Successful.");
      navigate("/login");
    } else {
      setErr(data.error);
    }
  };
  return (
    <div className="container signup-div">
      <h1>SIGNUP</h1>
      <TextField
        sx={{ maxWidth: "500px" }}
        fullWidth
        type="email"
        value={email}
        id="outlined-basic"
        variant="outlined"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ maxWidth: "500px", marginTop: "30px" }}
        fullWidth
        type="password"
        value={password}
        id="outlined-basic"
        variant="outlined"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {err ? (
        <Typography className="mt-3" color={"error"}>
          {err}
        </Typography>
      ) : (
        ""
      )}
      <Button
        size="large"
        className="mt-5"
        variant="contained"
        onClick={handleSignup}
      >
        SIGNUP
      </Button>
    </div>
  );
}

export default Signup;
