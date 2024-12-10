import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './renderer/Components/auth/AuthForm';
import DashboardPage from './renderer/pages/DashboardPage';
import ProfilePage from './renderer/pages/ProfilePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </Router>
  );
}

export default App;
