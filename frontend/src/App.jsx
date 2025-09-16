import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./auth/SignIn";
import { Signup } from "./auth/Signup";
import "./App.css";
import { DashboardLayout } from "./site/layout/DashboardLayout";
import { Chat } from "./site/Chat";
import ProtectedRoute from "./ProtectedRoute";

function App() {
   return (
      <Router>
         <Routes>
         
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<Signup />} />

            {/* Protected Routes */}
            <Route
               path="/dashboard"
               element={
                  <ProtectedRoute>
                     <DashboardLayout />
                  </ProtectedRoute>
               }
            >
               <Route index element={<Chat />} />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
