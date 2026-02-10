import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from "./SignInPage.module.css";
import emailIcon from "../../assets/images/email/email.svg";
import eyeIcon from "../../assets/images/eye/eye.svg";

export default function SignInPage() {
   const [isLoading, setIsLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleEmailInputChange = (
      event: React.ChangeEvent<HTMLInputElement>,
   ): void => {
      setEmail(event.target.value);
   };

   const handlePasswordInputChange = (
      event: React.ChangeEvent<HTMLInputElement>,
   ): void => {
      setPassword(event.target.value);
   };

   const signInUser = async (
      event: React.FormEvent<HTMLFormElement>,
      email: string,
      password: string,
   ) => {
      event.preventDefault();

      setIsLoading(true);
      try {
         console.log("Вход:", email, password);
         //request logic
         navigate("/home");
      } catch (error) {
         console.error("Sign In error", error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={false} />
         <main>
            <div className="container">
               <article className={styles.content}>
                  <section className={styles.formHeader}>
                     <h1>Sign in into an account</h1>
                     <p>
                        Enter your email and password to sign in into this app
                     </p>
                  </section>
                  <form
                     onSubmit={(event) => {
                        signInUser(event, email, password);
                     }}
                  >
                     <div className={styles.formContainer}>
                        <Input
                           id="emailInput"
                           placeholder="Enter email"
                           value={email}
                           onChange={handleEmailInputChange}
                           height="sm"
                           label="Email"
                           icon={emailIcon}
                           alt="email icon"
                        />
                        <Input
                           id="passwordInput"
                           placeholder="Enter password"
                           value={password}
                           onChange={handlePasswordInputChange}
                           height="sm"
                           label="Password"
                           icon={eyeIcon}
                           alt="eye icon"
                        />
                     </div>
                     <Button text="Sign Up" width={327} />
                  </form>
                  <section className={styles.formFooter}>
                     <p className={styles.formFooterSignIn}>
                        Forgot to create an account?{" "}
                        <span>
                           <Link to="/signup">Sign up</Link>
                        </span>
                     </p>
                  </section>
               </article>
            </div>
         </main>
         <Footer />
      </div>
   );
}
