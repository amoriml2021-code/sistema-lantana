
const indicadores = [
  { titulo: "Colaboradores ativos", valor: "01", detalhe: "Cadastro de demonstração" },
  { titulo: "Formulários previstos", valor: "02", detalhe: "Obrigações do exemplo" },
  { titulo: "Preenchidos", valor: "00", detalhe: "Aguardando lançamentos" },
  { titulo: "Pendentes", valor: "02", detalhe: "Precisam de acompanhamento" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7f4] text-[#26352c]">
      <aside className="fixed hidden h-screen w-64 bg-[#174b35] p-6 text-white md:block">
        <h1 className="text-2xl font-bold">LANTANA</h1>
        <p className="mt-1 text-xs text-green-100">GESTÃO DA QUALIDADE</p>

        <nav className="mt-12 space-y-3 text-sm">
          <div className="rounded-lg bg-white/15 px-4 py-3 font-semibold">
            Visão geral
          </div>
          <div className="px-4 py-3">Colaboradores</div>
          <div className="px-4 py-3">Formulários</div>
          <div className="px-4 py-3">Lançamentos</div>
          <div className="px-4 py-3">Relatórios</div>
          <div className="px-4 py-3">Configurações</div>
        </nav>

        <div className="absolute bottom-6 left-6 text-xs text-green-100">
          Sistema Lantana • 2026
        </div>
      </aside>

      <section className="p-6 md:ml-64 md:p-10">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Painel administrativo</p>
            <h2 className="mt-1 text-3xl font-bold">Visão geral</h2>
            <p className="mt-2 text-sm text-gray-500">
              Acompanhe os preenchimentos e a conformidade da equipe.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm">
            <span className="text-gray-500">Data de referência</span>
            <p className="font-semibold">17/11/2026</p>
          </div>
        </header>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {indicadores.map((item) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-gray-500">{item.titulo}</p>
              <p className="my-3 text-3xl font-bold text-[#174b35]">
                {item.valor}
              </p>
              <p className="text-xs text-gray-400">{item.detalhe}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold">Acompanhamento diário</h3>
            <p className="mt-1 text-sm text-gray-500">
              Situação dos formulários previstos para hoje.
            </p>
            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Preenchidos</span><strong>0%</strong>
                </div>
                <div className="h-3 rounded-full bg-gray-100">
                  <div className="h-3 w-0 rounded-full bg-green-600" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Pendentes</span><strong>100%</strong>
                </div>
                <div className="h-3 rounded-full bg-gray-100">
                  <div className="h-3 w-full rounded-full bg-amber-500" />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold">Pendências do dia</h3>
            <p className="mt-1 text-sm text-gray-500">
              Exemplo de obrigações aguardando preenchimento.
            </p>
            <div className="mt-5 space-y-3">
              {["FOR-001 • Controle de Balança", "FOR-002 • Controle de Exaustor"].map(
                (formulario) => (
                  <div
                    key={formulario}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-gray-50 p-4"
                  >
                    <span className="text-sm font-medium">{formulario}</span>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                      Pendente
                    </span>
                  </div>
                )
              )}
            </div>
          </section>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Sistema Lantana — Gestão de Formulários e Conformidade
        </p>
      </section>
    </main>
  );
}
