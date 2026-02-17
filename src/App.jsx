import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./context/ProtectRoute";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import TermsJourney from "./Elementes/terms";
import AskTest from "./Composants/Test/asktest";
import Questions from "./Composants/Test/Questions";
import Profile from "./Pages/profile";
import MainLayout from "./Elementes/MainLayout";


export default function App() {
  return <>   
   <BrowserRouter>      
  <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/Login" element={<Login />} />
      <Route path="/Terms" element={<TermsJourney />} />
      <Route path="/intro-test" element={<ProtectedRoute ><AskTest /></ProtectedRoute>} />
      <Route path="/Questions" element={<ProtectedRoute ><Questions /></ProtectedRoute>} />
            <Route element={<MainLayout />}>
              <Route path="/Profile" element={<ProtectedRoute ><Profile /></ProtectedRoute>} />
              <Route path="/Home" element={<ProtectedRoute ><Home /></ProtectedRoute>} />
            </Route>

      
    </Routes>
    </BrowserRouter>  
  </>
  
}