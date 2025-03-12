import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Distinction from './Components/Distinctions/Distinction';  // Import Distinction component
import Student from './Components/Scholar/Student_Supervisio';
import Publications from './Components/Publication/Publications';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/distinctions" element={<Distinction />} />
        <Route path="/student" element={<Student />} />
        <Route path="/publication" element={<Publications />} />
      </Routes>
    </Router>
  );
};

export default App;
