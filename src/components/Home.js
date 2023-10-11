import React from "react";

// This is the Home component where the instruction or step to use this task.
function Home() {
  return (
    <div className="mt-5 container">
      <h1 className="text-center mb-5">Password Reset Task</h1>
      <h6 className="text-center">
        The task is the implement a correct password reset flow with email
        verification and proper update of the new password in the database for
        the web app.
      </h6>
      <p className="mt-5">
        <b>-{">"} </b>Login with your email and password.<br></br>
        <b>-{">"} </b>If the user is not exist Signup with your email and
        password to create.<br></br>
        <b>-{">"} </b>After successful of Signup, Login with same email and
        password.<br></br>
        <b>-{">"} </b>If the user password is incorrect and cannot remember.
        Click on Forgot Password option in Login Page.<br></br>
        <b>-{">"} </b>In the Forgot Password page, Enter your email and submit.
        A reset password link will be sent to your email.
        <br></br>
        <b>-{">"} </b>Open your email and click on the link and it navigates to
        another page.
        <br></br>
        <b>-{">"} </b>There type your new password and re-enter the new password
        to conform and submit.
        <br></br>
        <b>-{">"} </b>The new password is updated and now user can login with
        email and updated password.
      </p>
    </div>
  );
}

export default Home;
