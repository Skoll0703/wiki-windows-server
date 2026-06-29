import ipFija1 from "../../docs_wiki_riqchr/img_riqchr/ip fija1 (1).png"
import ipFija2 from "../../docs_wiki_riqchr/img_riqchr/ip fija1 (2).png"
import ipFija3 from "../../docs_wiki_riqchr/img_riqchr/ip fija1 (3).png"

export default function Instalacion() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">Paso 1</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Instalación y configuración básica</h1>
        <p className="mt-4 text-slate-600">
          Se configuró Windows Server como controlador del laboratorio con un nombre de equipo y una
          IP fija para asegurar comunicación estable en la red interna.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Configuración realizada</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Nombre del equipo: SRV-DC01</li>
            <li>• IP fija: 192.168.10.10</li>
            <li>• Firewall habilitado para servicios básicos</li>
            <li>• Red interna configurada para comunicación entre servidor y cliente</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <img src={ipFija1} alt="Configuración IP fija del servidor" className="h-64 w-full rounded-lg object-cover" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <img src={ipFija2} alt="Detalle de red del servidor" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
        <img src={ipFija3} alt="Configuración de red del servidor" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
        <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">Resumen</h2>
          <p className="mt-3 text-sm text-slate-300">
            La base de la infraestructura quedó lista para instalar los roles de Active Directory y DNS.
          </p>
        </div>
      </div>
    </div>
  )
}