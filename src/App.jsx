import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Add BrowserRouter
import './assets/css/tailwind.css';
import './assets/scss/tailwind.scss';
import './assets/scss/icons.scss';
import './App.css';

import Index from "./pages/index";
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ResetPassword from './pages/auth/reset-password';
import Loader from "./component/Loader";

export default function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'ltr');
    handleRouteChange();
  }, []);

  // Route change method
  const handleRouteChange = () => {
    setLoading(false);
  }

  return (
    <Router> {/* Wrap your Routes in Router */}
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-signup" element={<Signup />} />
        <Route path="/auth-reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}
