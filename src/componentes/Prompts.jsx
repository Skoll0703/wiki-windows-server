export default function Prompts() {
  const prompts = [
    {
      title: "Diseñar una política de seguridad",
      text: "Actúa como administrador de Windows Server y propón una política de grupo para reforzar la seguridad de los equipos del dominio."
    },
    {
      title: "Configurar un cliente nuevo",
      text: "Ayúdame a preparar un equipo Windows para unirse al dominio inacap.local con DNS del controlador de dominio."
    },
    {
      title: "Diagnosticar DNS y DHCP",
      text: "Analiza una falla de conectividad en un laboratorio Windows Server y sugiere pasos para verificar DNS y DHCP."
    }
  ]

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">Recursos IA</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Prompts para apoyar la administración</h1>
        <p className="mt-4 text-slate-600">
          Estos prompts sirven para pedir ayuda a una IA al momento de diseñar, verificar o solucionar
          tareas del laboratorio Windows Server.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        {prompts.map((prompt) => (
          <div key={prompt.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">{prompt.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{prompt.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}