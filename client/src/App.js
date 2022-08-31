import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/HomePage/Landing";
import Catalogo from "./pages/Catálogo/Catalogo";
import Cita from "./pages/Cita/Cita";
import Details from "./pages/PostDetails/Details";
import Nosotros from "./pages/AcercaDeNosotros/Nosotros";
import Venta from "./pages/Cita-venta/Venta";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/catalogo/search' element={<Catalogo />} />
        <Route exact path="/catalogo/:id" element={<Details />} />
        <Route exact path='/cita' element={<Cita />} />
        <Route exact path='/venta' element={<Venta />} />
        <Route exact path='/nosotros' element={<Nosotros />} />
      </Routes>
    </Router>
  );

};

export default App;