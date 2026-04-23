import { Server, Shield, Network, Database } from "lucide-react";

const rows = [
  {
    icon: Network,
    title: "Exposição via Cloudflare Tunnel",
    body: "Sem abrir portas no servidor. Tráfego TLS terminado na borda da Cloudflare antes de chegar no backend.",
  },
  {
    icon: Server,
    title: "Inferência self-hosted",
    body: "Modelos rodando em ambiente Linux / Proxmox controlado. Custo previsível e dados sob meu controle.",
  },
  {
    icon: Shield,
    title: "Multi-tenancy no backend",
    body: "Cada cliente isolado por chave e contexto. Pensado desde o início para não vazar entre tenants.",
  },
  {
    icon: Database,
    title: "Stack moderna",
    body: "Vue / Nuxt no frontend, FastAPI servindo a API, Supabase para auth e dados. Proxy do front para o back.",
  },
];

const Infra = () => {
  return (
    <section className="border-t border-border bg-secondary/40 py-20 sm:py-28">
      <div className="container-tight">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Infra & confiabilidade
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Construído como produto, não como demo de fim de semana.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A Aratutec roda 24/7. Cada peça da arquitetura existe por uma razão técnica — não por hype.
            </p>
          </div>

          <ul className="space-y-6">
            {rows.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Infra;
