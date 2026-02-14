import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import styles from "@/pages/SignInPage/SignInPage.module.css";
import { UserContext } from "@/contexts/UserContext/UserContext";

export default function SignInPage() {
   const [isLoading, setIsLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
      {},
   );
   const navigate = useNavigate();
   const user = useContext(UserContext);

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

   const signInUser = async (
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
         console.log(isLoading)
         await user.login(email, password);
         navigate("/");
      } catch (error) {
         console.error("Sign In error", error);
      } finally {
         setIsLoading(false);
      }
   };

   const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
      await signInUser(event, email, password);
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
