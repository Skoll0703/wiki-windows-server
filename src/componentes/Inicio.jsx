export default function Inicio() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
          Laboratorio Windows Server
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Wiki de implementación y administración del dominio
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Esta guía recopila la instalación del servidor, la configuración de Active Directory,
          la integración del cliente, los servicios de red y la administración con GPO.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">Topología</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Servidor: SRV-DC01</li>
            <li>Cliente: PC01</li>
            <li>Dominio: inacap.local</li>
            <li>Red interna: redlab</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Objetivo</h2>
          <p className="mt-3 text-sm text-slate-600">
            Mostrar un flujo completo de puesta en marcha de un laboratorio Windows Server,
            desde la instalación hasta la administración centralizada.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Herramientas</h2>
          <p className="mt-3 text-sm text-slate-600">
            Se utilizan VirtualBox, Windows Server, Windows client, DNS, DHCP y políticas de grupo.
          </p>
        </div>
      </div>
    </div>
  )
}