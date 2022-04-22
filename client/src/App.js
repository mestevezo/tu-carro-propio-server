import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/HomePage/Landing";
import Catalogo from "./pages/Catálogo/Catalogo";
import Cita from "./pages/Cita/Cita"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/catalogo' element={<Catalogo />} />
        <Route exact path='/agendaunacita' element={<Cita />} />
      </Routes>
    </Router>
  );
}

export default App;