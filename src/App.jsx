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
import Settings from "./Composants/sideBarrePages/settings";
import Security from "./Composants/sideBarrePages/security";
import Logout from "./Composants/sideBarrePages/logout";


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
              <Route path="/Settings" element={<ProtectedRoute ><Settings /></ProtectedRoute>} />
              <Route path="/Security" element={<ProtectedRoute ><Security /></ProtectedRoute>} />
             
            </Route>
             
    </Routes>
    </BrowserRouter>  
  </>
  
}