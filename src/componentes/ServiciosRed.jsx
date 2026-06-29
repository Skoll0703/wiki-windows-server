import dhcp1 from "../../docs_wiki_riqchr/img_riqchr/dhcp (1).png"
import dhcp2 from "../../docs_wiki_riqchr/img_riqchr/dhcp (2).png"
import dhcp3 from "../../docs_wiki_riqchr/img_riqchr/dhcp (3).png"

export default function ServiciosRed() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">Paso 4</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Servicios de red: DNS y DHCP</h1>
        <p className="mt-4 text-slate-600">
          Se habilitaron los servicios de DNS y DHCP para automatizar la resolución de nombres y la
          asignación de direcciones IP dentro del laboratorio.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Funciones principales</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• DNS para resolver nombres del dominio</li>
            <li>• DHCP para entrega automática de IP</li>
            <li>• Reservas y alcance configurados en el rango de red</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">Importancia</h2>
          <p className="mt-3 text-sm text-slate-300">
            Estos servicios permiten que el laboratorio se comporte como una red real y que los equipos
            se conecten de forma automática y ordenada.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <img src={dhcp1} alt="Configuración DHCP" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
        <img src={dhcp2} alt="Ámbito DHCP" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
        <img src={dhcp3} alt="Resumen de DHCP" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
      </div>
    </div>
  )
}