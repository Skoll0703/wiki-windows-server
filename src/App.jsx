import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

import ActiveDirectory from "./componentes/ActiveDirectory"
import Cliente from "./componentes/Cliente"
import Gpo from "./componentes/Gpo"
import Inicio from "./componentes/Inicio"
import Instalacion from "./componentes/Instalacion"
import Prompts from "./componentes/Prompts"
import ServiciosRed from "./componentes/ServiciosRed"

function App() {
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm transition ${isActive ? "bg-cyan-600 text-white" : "text-slate-200 hover:bg-slate-800 hover:text-white"}`

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <nav className="border-b border-slate-200 bg-slate-900/95 text-white backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-4">
            <span className="mr-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Wiki RIQCHR
            </span>
            <NavLink to="/" className={linkClass}>Inicio</NavLink>
            <NavLink to="/instalacion" className={linkClass}>Instalación</NavLink>
            <NavLink to="/ad" className={linkClass}>Active Directory</NavLink>
            <NavLink to="/cliente" className={linkClass}>Cliente</NavLink>
            <NavLink to="/red" className={linkClass}>Servicios</NavLink>
            <NavLink to="/gpo" className={linkClass}>GPO</NavLink>
            <NavLink to="/ia" className={linkClass}>IA</NavLink>
          </div>
        </nav>

        <main className="mx-auto w-full max-w-6xl px-4 py-8">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/instalacion" element={<Instalacion />} />
            <Route path="/ad" element={<ActiveDirectory />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/red" element={<ServiciosRed />} />
            <Route path="/gpo" element={<Gpo />} />
            <Route path="/ia" element={<Prompts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App