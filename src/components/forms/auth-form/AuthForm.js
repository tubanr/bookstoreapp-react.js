import React from "react";
import styles from "../../../pages/login-page/login.module.css";

const AuthForm = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) => {
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className={styles["footer-form"]} onSubmit={handleLogin}>
      <div className={styles["form-group"]}>
        <label> Username:</label>
        <input
          type="username"
          className={styles["form-input"]}
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>

      <div className={styles["form-group"]}>
        <label> Password:</label>
        <input
          type="password"
          className={styles["form-input"]}
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>

      <div className={styles["form-group"]}>
        <input type="submit" className="button-primary" value="Login" />
      </div>
    </form>
  );
};

export default AuthForm;
