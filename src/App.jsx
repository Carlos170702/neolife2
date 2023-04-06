import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Productos } from "./components/Productos";
import { SelectOpc } from "./components/SelectOpc";
import { AcercaDeNosotros } from "./components/AcercaDeNosotros";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectOpc />} />
        <Route path="/productos/Cliente" element={<Productos />} />
        <Route path="/productos/Distribuidor" element={<Productos />} />
        
        {/* nuevo */}
        <Route path="/Nosotros" element={<AcercaDeNosotros />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
