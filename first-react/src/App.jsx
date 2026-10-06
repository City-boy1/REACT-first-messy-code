import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";

export default function App() {
    return(
        <div style={{
            backgroundColor:"#262525",
            minHeight:"100vh",
            color:"#e5e2e2",
            }}>
            
            <AuthProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            </AuthProvider>
        </div>
    )
}