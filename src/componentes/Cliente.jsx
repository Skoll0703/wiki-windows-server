import cliente from "../../docs_wiki_riqchr/img_riqchr/cliente.png"

export default function Cliente() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">Paso 3</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Integración del cliente al dominio</h1>
        <p className="mt-4 text-slate-600">
          El equipo cliente se configura para usar el servidor como DNS y unirse al dominio para validar
          autenticación y acceso centralizado.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Acciones en el cliente</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Asignar DNS del servidor DC</li>
            <li>• Cambiar el nombre del equipo</li>
            <li>• Unirse al dominio inacap.local</li>
            <li>• Iniciar sesión con una cuenta de dominio</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">Validación</h2>
          <p className="mt-3 text-sm text-slate-300">
            Una vez unido al dominio, el cliente queda habilitado para usar recursos compartidos y los
            permisos definidos por Active Directory.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <img src={cliente} alt="Cliente unido al dominio" className="h-72 w-full rounded-xl object-cover" />
      </div>
    </div>
  )
}