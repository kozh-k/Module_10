import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContextProvider from "./contexts/UserContext/UserContextProvider";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
   return (
      <BrowserRouter>
         <AppContextProvider>
            <Routes>
               <Route path="*" element={<HomePage />} />
               <Route path="/signup" element={<SignUpPage />} />
               {/* <Route path="/signin" element={<SignInPage />} /> */}
            </Routes>
         </AppContextProvider>
      </BrowserRouter>
   );
}

export default App;
