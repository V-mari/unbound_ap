//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const menuItems = [
  { name: "Gestión de Beneficiarios", path: "/beneficiarios" },
  { name: "Planificación Financiera", path: "/finanzas" },
  { name: "Seguimiento de Progreso", path: "/progreso" },
  { name: "Gestión de Actividades", path: "/actividades" },
  { name: "Gestión de Videos y Fotografías", path: "/multimedia" },
];

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-5">Unbound</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className="mb-2">
            <Link className="hover:bg-gray-600 p-2 block rounded" to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold">Bienvenido al sistema</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
