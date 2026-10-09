import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import StudyPlanner from "./pages/StudyPlanner";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Study Manager</h1>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/planner">Study Planner</Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<StudyPlanner />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
