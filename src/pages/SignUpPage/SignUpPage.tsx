import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUpPage() {
   const [isLoading, setIsLoading] = useState(false);

   const navigate = useNavigate();

   const signUpUser = async (email: string, password: string) => {
      setIsLoading(true);
      try {
         console.log("Регистрация:", email, password);
         //request logic
         navigate("/dashboard");
      } catch (error) {
         console.error("Sign Up error", error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <>
         <Header />
         <div className="container">
            <section>
               <h1>Create an account</h1>
               <p>Enter your email and password to sign up for this app</p>
            </section>
            <Form buttonText="Sign Up" onSubmit={signUpUser} />
            <section>
               <p></p>
               <p>
                  Already have an account?
                  <Link to="/signin">Sign in</Link>
               </p>
            </section>
         </div>
         <Footer />
      </>
   );
}
