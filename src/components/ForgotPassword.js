import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = async () => {
    await fetch("https://password-reset-ay3q.onrender.com/user/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setErr("");
        } else {
          setErr(data.error);
        }
      });
  };
  return (
    <div className="container login-div">
      <h1>FORGOT PASSWORD</h1>
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
      {err ? (
        <Typography className="mt-3" color={"error"}>
          {err}
        </Typography>
      ) : (
        ""
      )}
      <Button
        size="large"
        className="mt-3"
        variant="contained"
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </div>
  );
}

export default ForgotPassword;
