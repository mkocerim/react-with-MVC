import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
