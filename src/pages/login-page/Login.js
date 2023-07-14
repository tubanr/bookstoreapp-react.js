import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import AuthImg from "../../assets/imgauth.jpg";
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/auth-form/AuthForm";
import { useNavigate } from "react-router-dom";



const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn]= useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    //Prepare the login data
    const loginData = {
      username,
      password,
    };
    console.log("login", JSON.stringify(loginData));

    try {
      //Send login request to the FastAPI login endpoint
      const formData = new FormData()
      formData.append("username",loginData.username)
      formData.append("password",loginData.password)
      const response = await fetch("http://127.0.0.1:8000/token", {
        method: "POST",
        body:formData,
      });
      const responseData = await response.json();

      if (response.ok) {
        setLoggedIn(true);
        navigate('/');

        
        // Login successful, redirect to the desired page
        console.log("Login successful");
        console.log("user id:", responseData.user_id);
        console.log("access token:", responseData.access_token);
        console.log(" token type:", responseData.token_type);

        //store the access token
        localStorage.setItem("access_token", responseData.access_token);
        localStorage.setItem("user_id", responseData.user_id);
        localStorage.setItem("username", responseData.username);

        //redirect to the homepage
        

      } else {
        //Login failed, handle error response
        console.log("Login Failed");
        console.log("error:", responseData.detail);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      return
    }
  }, [isLoggedIn]);


  return (
    <React.Fragment>
      <Navbar />
      <section className={styles["login-container"]}>
        <div className={styles["login-img-container"]}>
          <img src={AuthImg} alt="authentication-background" />{" "}
        </div>

        <div className={styles["login-content-container"]}>
          <div className={styles["content-wrapper"]}>
            <h2>Login</h2>
            <p>Sign in with username and password</p>
            <AuthForm
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              handleLogin={handleLogin}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
