import { ArrowUpRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="container-tight relative pb-20 pt-20 sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/60 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          API em produção · aratutec.org/v1
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl animate-fade-up">
          IA em produção,
          <br />
          <span className="italic text-brand">não em slides.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-up">
          Sou <strong className="font-semibold text-foreground">Pedro Murilo Gomes</strong> — desenvolvedor pleno de Software & IA.
          Construo e opero a <strong className="font-semibold text-foreground">Aratutec</strong>: uma API HTTP compatível com OpenAI,
          com inferência self-hosted, chat com visão, streaming e foco real em custo.
        </p>

        <p className="mt-3 max-w-2xl text-sm text-muted-foreground/80 animate-fade-up">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">EN ·</span>{" "}
          Mid-level Software & AI developer. I build &amp; run Aratutec — an OpenAI-compatible API with self-hosted inference, vision and streaming.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up">
          <a
            href="https://aratutec.org"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Abrir o Playground
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://aratutec.org/docs"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <BookOpen className="h-4 w-4" />
            Ver documentação
          </a>
          <a
            href="#integrar"
            className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Integrar em minutos →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
