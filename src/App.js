import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import './App.css';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main className="p-3">
        {/* Route components will be rendered here */}
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/register" element={<Register />} />
          <Route to="/login" element={<Login />} />
          <Route to="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
