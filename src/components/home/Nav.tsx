import { Github, Linkedin } from "lucide-react";

const Nav = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-tight flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label="Aratutec — início">
          <span className="inline-block h-2 w-2 rounded-full bg-brand" aria-hidden />
          <span className="font-display text-lg font-semibold tracking-tight">Aratutec</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">/ Pedro Gomes</span>
        </a>
        <nav className="flex items-center gap-1 text-sm">
          <a href="#capacidades" className="hidden rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground sm:inline-block">
            O que faz
          </a>
          <a href="#integrar" className="hidden rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground sm:inline-block">
            Integrar
          </a>
          <a href="#sobre" className="hidden rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground sm:inline-block">
            Sobre
          </a>
          <a
            href="https://github.com/PedroMMGomes"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub de Pedro Gomes"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/pedrogomes600"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn de Pedro Gomes"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://aratutec.org"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 inline-flex items-center rounded-md bg-foreground px-3 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90"
          >
            Abrir Playground
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
