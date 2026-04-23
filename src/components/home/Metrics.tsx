const metrics = [
  {
    value: "~90%",
    label: "Redução de custo de inferência",
    note: "Arquitetura self-hosted vs. depender só de API cloud.",
  },
  {
    value: "10k+",
    label: "Mensagens processadas / dia",
    note: "Ordem de grandeza em produção, não benchmark sintético.",
  },
  {
    value: "OpenAI-compatible",
    label: "API HTTP drop-in",
    note: "POST /v1/chat/completions, visão, JSON e SSE streaming.",
  },
];

const Metrics = () => {
  return (
    <section className="border-y border-border bg-secondary/40 py-14 sm:py-16">
      <div className="container-tight">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Prova em números
        </p>
        <div className="mt-8 grid gap-10 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="border-l-2 border-brand pl-5">
              <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {m.value}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground">{m.label}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Números aproximados, descritos com honestidade — não é ranking absoluto de mercado.
        </p>
      </div>
    </section>
  );
};

export default Metrics;
