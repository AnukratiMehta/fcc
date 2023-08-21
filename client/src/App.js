import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from "./Components/Home";
import Header from "./Components/Header";
import Courses from "./Components/Courses";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    console.log('Token from localStorage:', token); // Add this line
    if (token) {
        setIsAuthenticated(true);
    }
}, []);


  return (
    <Router basename='/fcc'>
      <div>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated}/>} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/courses" element={isAuthenticated ? <Courses /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}
