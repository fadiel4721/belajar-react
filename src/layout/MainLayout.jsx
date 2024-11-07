import { Outlet, Navigate } from "react-router-dom";  
import { useContext } from "react";
import LoginContext from "../context/LoginContext";  
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

export default function MainLayout() {
  const { isLoggedIn } = useContext(LoginContext);  // Mengambil status login

  // Jika belum login, redirect ke halaman login
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
