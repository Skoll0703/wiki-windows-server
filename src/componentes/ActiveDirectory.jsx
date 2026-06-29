import ad1 from "../../docs_wiki_riqchr/img_riqchr/active directory (1).png"
import ad2 from "../../docs_wiki_riqchr/img_riqchr/active directory (2).png"
import ad3 from "../../docs_wiki_riqchr/img_riqchr/active directory (3).png"

export default function ActiveDirectory() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">Paso 2</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Active Directory Domain Services</h1>
        <p className="mt-4 text-slate-600">
          Se instaló el rol de Active Directory y se promovió el servidor a controlador de dominio para
          administrar usuarios, equipos y políticas desde un único punto central.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Pasos principales</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Instalar el rol AD DS en Windows Server</li>
            <li>• Promover el servidor a controlador de dominio</li>
            <li>• Crear el dominio inacap.local</li>
            <li>• Definir usuarios, equipos y unidades organizativas</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">Resultado esperado</h2>
          <p className="mt-3 text-sm text-slate-300">
            El servidor pasa a ser el centro de autenticación y administración del entorno.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <img src={ad1} alt="Pantalla de instalación de Active Directory" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
        <img src={ad2} alt="Configuración del dominio en Active Directory" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
        <img src={ad3} alt="Gestión de objetos del dominio" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
      </div>
    </div>
  )
}