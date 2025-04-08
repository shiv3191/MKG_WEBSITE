import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Distinction from './Components/Distinctions/Distinction';  // Import Distinction component
import Student from './Components/Scholar/Student_Supervisio';
import Publications from './Components/Publication/Publications';
import OtherActivities from './Components/OtherActivities/OtherActivities';
import PositionsAvailable from './Components/PositionsAvailable/PositionsAvailable';
import Research from './Components/Research/Research';
import Teaching from './Components/Teachings/Teaching';
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
        <Route path="/otherActivities" element={<OtherActivities />} />
        <Route path="/positionsAvailable" element={<PositionsAvailable />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
    </Router>
  );
};

export default App;
