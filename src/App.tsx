import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext/UserContextProvider";
import ThemeContextProvider from "./contexts/ThemeContext/ThemeContextProvider";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
   return (
      <BrowserRouter>
         <UserContextProvider>
            <ThemeContextProvider>
               <Routes>
                  <Route path="*" element={<HomePage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/signin" element={<SignInPage />} />
                  <Route path="/error" element={<ErrorPage />} />
                  <Route path="/notfound" element={<NotFoundPage />} />
               </Routes>
            </ThemeContextProvider>
         </UserContextProvider>
      </BrowserRouter>
   );
}

export default App;
