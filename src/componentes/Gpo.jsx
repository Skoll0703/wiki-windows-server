import gpo1 from "../../docs_wiki_riqchr/img_riqchr/objetos del dominio (1).png"
import gpo2 from "../../docs_wiki_riqchr/img_riqchr/objetos del dominio (2).png"
import gpo3 from "../../docs_wiki_riqchr/img_riqchr/objetos del dominio (3).png"

export default function Gpo() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">Paso 5</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Políticas de grupo</h1>
        <p className="mt-4 text-slate-600">
          Las GPO permiten centralizar la administración del comportamiento de equipos y usuarios dentro
          del dominio sin necesidad de modificar cada equipo manualmente.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Ejemplos de uso</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Aplicar restricciones de seguridad</li>
            <li>• Desactivar opciones no deseadas del sistema</li>
            <li>• Configurar accesos y permisos por grupos</li>
            <li>• Administrar usuarios de forma homogénea</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">Valor</h2>
          <p className="mt-3 text-sm text-slate-300">
            Gracias a las políticas de grupo, el entorno se vuelve más seguro, consistente y fácil de
            mantener.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <img src={gpo1} alt="Objetos del dominio" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
        <img src={gpo2} alt="Administración de GPO" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
        <img src={gpo3} alt="Estructura de dominio" className="h-48 w-full rounded-2xl object-cover shadow-sm" />
      </div>
    </div>
  )
}