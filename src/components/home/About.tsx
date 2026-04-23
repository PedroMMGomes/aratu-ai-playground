import { ArrowUpRight, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="border-t border-border py-20 sm:py-28">
      <div className="container-tight">
        <div className="grid gap-12 md:grid-cols-[auto_1fr] md:gap-14">
          {/* TODO: substituir pelo Pedro — foto pessoal */}
          <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border border-border bg-secondary md:h-40 md:w-40">
            <div className="flex h-full w-full items-center justify-center font-display text-5xl font-medium text-muted-foreground">
              P
            </div>
            <span className="sr-only">Foto de Pedro Murilo Gomes — substituir</span>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Sobre
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Pedro Murilo Maciel Gomes
              <span className="ml-2 align-middle text-base font-normal text-muted-foreground">
                — “Aratu”
              </span>
            </h2>

            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Desenvolvedor <strong className="font-semibold text-foreground">pleno de Software &amp; IA</strong> na Omni.
                Fora do CLT, mantenho a <strong className="font-semibold text-foreground">Aratutec</strong> — meu projeto próprio,
                em produção, que serve a API e o playground deste site. Aratutec é projeto pessoal,
                não tem relação com vagas ou clientes da Omni.
              </p>
              <p>
                Atuo de ponta a ponta: da infra (Linux, Proxmox, Cloudflare Tunnel) ao LLM em produção
                (FastAPI, Supabase, multi-tenancy, streaming). Inglês fluente. Antes do CLT atual,
                trabalhei como freelance na Atom.
              </p>
              <p>
                Não me vendo como senior em tudo — me vendo como pleno com entregas fortes
                em IA aplicada e infraestrutura. O que está aqui é o que eu de fato construí e opero.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://linkedin.com/in/pedrogomes600"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              >
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/PedroMMGomes"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
              >
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="mailto:pedrogomes600@hotmail.com"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Mail className="h-3.5 w-3.5" />
                Falar comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
