import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/HomePage/Landing";
import Catalogo from "./pages/Catálogo/Catalogo";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/Catalogo' element={<Catalogo />} />
      </Routes>
    </Router>
  );
}

export default App;