import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import styles from "@/pages/SignUpPage/SignUpPage.module.css";

export default function SignUpPage() {
   const [isLoading, setIsLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
      {},
   );
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

   const validateForm = (): boolean => {
      const emailRegExp = /.+@.+\..+/;

      if (!email || !emailRegExp.test(email)) {
         setErrors({ email: "email error" });
         return false;
      }

      if (!password || password.length < 8) {
         setErrors({ password: "password error" });
         return false;
      }

      return true;
   };

   const signUpUser = async (
      event: React.SubmitEvent<HTMLFormElement>,
      email: string,
      password: string,
   ) => {
      event.preventDefault();

      if (!validateForm()) {
         console.log(errors);
         return;
      }

      setIsLoading(true);
      try {
         console.log("signing up:", email, password);
         console.log(isLoading);
         //request logic
         navigate("/home");
      } catch (error) {
         console.error("Sign Up error", error);
      } finally {
         setIsLoading(false);
      }
   };

   const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
      await signUpUser(event, email, password);
   };

   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={false} />
         <main>
            <div className="container">
               <article className={styles.content}>
                  <section className={styles.formHeader}>
                     <h1>Create an account</h1>
                     <p>
                        Enter your email and password to sign up for this app
                     </p>
                  </section>
                  <form onSubmit={handleSubmit}>
                     <div className={styles.formContainer}>
                        <Input
                           id="emailInput"
                           placeholder="Enter email"
                           value={email}
                           onChange={handleEmailInputChange}
                           height="sm"
                           label="Email"
                           icon={"email"}
                        />
                        <Input
                           id="passwordInput"
                           placeholder="Enter password"
                           value={password}
                           onChange={handlePasswordInputChange}
                           height="sm"
                           label="Password"
                           icon={"eye"}
                        />
                     </div>
                     <Button text="Sign Up" size={"xxl"} />
                  </form>
                  <section className={styles.formFooter}>
                     <p className={styles.formFooterTerms}>
                        By clicking continue, you agree to our{" "}
                        <span>Terms of Service</span> and{" "}
                        <span>Privacy Policy</span>
                     </p>
                     <p className={styles.formFooterSignIn}>
                        Forgot to create an account?{" "}
                        <span>
                           <Link to="/signin">Sign in</Link>
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
