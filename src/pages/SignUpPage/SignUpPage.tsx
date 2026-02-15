import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import PasswordInput from "@/components/UI/Input/PasswordInput";
import styles from "@/pages/SignUpPage/SignUpPage.module.css";
import { UserContext } from "@/contexts/UserContext/UserContext";

export default function SignUpPage() {
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
         setErrors({ email: "Email is not valid" });
         return false;
      }

      if (!password || password.length < 8) {
         setErrors({
            password: "Password length must be at least 8 symbols",
         });
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
         console.log(isLoading);
         await user.register(email, password);
         navigate("/");
      } catch (error) {
         if (error instanceof Error && error.cause) {
            const cause = error.cause as { type: "email" | "password" };

            if (cause.type === "email") {
               setErrors({ email: error.message });
            }
         }
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
                           errorText={errors.email || undefined}
                        />
                        <PasswordInput
                           id="passwordInput"
                           placeholder="Enter password"
                           value={password}
                           onChange={handlePasswordInputChange}
                           height="sm"
                           label="Password"
                           icon={"eye"}
                           errorText={errors.password || undefined}
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
