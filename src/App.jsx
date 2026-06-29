import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import Inicio from "./componentes/Inicio"
import Instalacion from "./componentes/Instalacion"
import ActiveDirectory from "./componentes/ActiveDirectory"
import Cliente from "./componentes/Cliente"
import ServiciosRed from "./componentes/ServiciosRed"
import Gpo from "./componentes/Gpo"
import Prompts from "./componentes/Prompts"


function App(){

return(

<BrowserRouter>

<div className="min-h-screen bg-gray-100">


<nav className="p-4 bg-slate-900 text-white flex gap-4">

<Link to="/">Inicio</Link>
<Link to="/instalacion">Instalación</Link>
<Link to="/ad">Active Directory</Link>
<Link to="/cliente">Cliente</Link>
<Link to="/red">Servicios</Link>
<Link to="/gpo">GPO</Link>
<Link to="/ia">IA</Link>

</nav>


<Routes>

<Route path="/" element={<Inicio/>}/>
<Route path="/instalacion" element={<Instalacion/>}/>
<Route path="/ad" element={<ActiveDirectory/>}/>
<Route path="/cliente" element={<Cliente/>}/>
<Route path="/red" element={<ServiciosRed/>}/>
<Route path="/gpo" element={<Gpo/>}/>
<Route path="/ia" element={<Prompts/>}/>

</Routes>


</div>

</BrowserRouter>

)

}

export default App