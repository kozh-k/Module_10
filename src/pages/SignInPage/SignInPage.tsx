import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import PasswordInput from "@/components/UI/Input/PasswordInput";
import styles from "@/pages/SignInPage/SignInPage.module.css";
import { UserContext } from "@/contexts/UserContext/UserContext";

export default function SignInPage() {
   const [isLoading, setIsLoading] = useState(false);
   const [email, setEmail] = useState("");
   const [emailTouched, setEmailTouched] = useState(false);
   const [password, setPassword] = useState("");
   const [passwordTouched, setPasswordTouched] = useState(false);
   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
      {},
   );
   const navigate = useNavigate();
   const user = useContext(UserContext);

   useEffect(() => {
      const emailRegExp = /.+@.+\..+/;
      const errors: { email?: string; password?: string } = {};

      if (emailTouched && (!email || !emailRegExp.test(email))) {
         errors.email = "Email is not valid";
      }

      if (passwordTouched && (!password || password.length < 6)) {
         errors.password = "Password length must be at least 6 symbols";
      }

      setErrors(errors);
   }, [email, password, emailTouched, passwordTouched]);

   const handleEmailInputChange = (
      event: React.ChangeEvent<HTMLInputElement>,
   ): void => {
      setEmail(event.target.value);
   };

   const handleEmailInputFocus = () => {
      setEmailTouched(true);
   };

   const handleEmailInputBlur = () => {
      if (!email) {
         setEmailTouched(false);
      }
   };

   const handlePasswordInputChange = (
      event: React.ChangeEvent<HTMLInputElement>,
   ): void => {
      setPassword(event.target.value);
   };

   const handlePasswordInputFocus = () => {
      setPasswordTouched(true);
   };

   const handlePasswordInputBlur = () => {
      if (!password) {
         setPasswordTouched(false);
      }
   };

   const validateForm = (): boolean => {
      const emailRegExp = /.+@.+\..+/;

      if (!email || !emailRegExp.test(email)) {
         setErrors({ email: "Email is not valid" });
         return false;
      }

      if (!password || password.length < 6) {
         setErrors({ password: "Password length must be at least 6 symbols" });
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
         return;
      }

      setIsLoading(true);
      try {
         console.log(isLoading);
         await user.login(email, password);
         navigate("/");
      } catch (error) {
         if (error instanceof Error && error.cause) {
            const cause = error.cause as { type: "email" | "password" };

            if (cause.type === "email") {
               setErrors({ email: error.message });
            } else if (cause.type === "password") {
               setErrors({ password: error.message });
            }
         }
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
                           onFocus={handleEmailInputFocus}
                           onBlur={handleEmailInputBlur}
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
                           onFocus={handlePasswordInputFocus}
                           onBlur={handlePasswordInputBlur}
                           height="sm"
                           label="Password"
                           errorText={errors.password || undefined}
                           isSignUpInput={false}
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
