import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles["footer-container"]}>
      <div className={styles["footer-content-container"]}>
          
      </div>
      <p> &copy; 2023 BookWorm. All Rights Reserved.</p>

      
    </section>
  );
};

export default Footer;

/*<form className="footer-form">
                <div className="form-group">
                    <label htmlFor="username" className="form-label"> Username:</label>
                    <input type="text"  id="username" className="form-input" placeholder="enter your username"/>


                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label"> Email:</label>
                    <input type="email"  id="email" className="form-input" placeholder="enter your email"/>
                </div>
                <div className="form-group">
                    <label className="form-label"> Password:</label>
                    <input className="form-input" placeholder="type your password" />
                </div>
                <div className="form-group">
                    <a href="#" className="form-submit">Submit</a>
                </div>
            </form>*/


                      {/* <form className={styles["footer-form"]}>
            <div className={styles["form-group"]}>
              <label> Username:</label>
              <input
                type="username"
                className={styles["form-input"]}
                placeholder="Enter your username"
              />
            </div>
            <div className={styles["form-group"]}>
              <label> Email:</label>
              <input
                type="email"
                className={styles["form-input"]}
                placeholder="Enter your email"
              />
            </div>

            <div className={styles["form-group"]}>
              <label> Password:</label>
              <input
                type="password"
                className={styles["form-input"]}
                placeholder="Enter your password"
              />
            </div>

            <div className={styles["form-group"]}>
              <input type="submit" className="button-primary" value="Signup" />
            </div>
          </form> */}