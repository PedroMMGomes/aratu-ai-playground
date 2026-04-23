import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 py-12">
      <div className="container-tight flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand" aria-hidden />
            <span className="font-display text-base font-semibold tracking-tight">Aratutec</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pedro Murilo Maciel Gomes. Feito no Brasil 🇧🇷.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <a
            href="https://aratutec.org/docs"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            Documentação
          </a>
          <a
            href="https://aratutec.org"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            Playground
          </a>
          <a
            href="https://github.com/PedroMMGomes"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/pedrogomes600"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:pedrogomes600@hotmail.com"
            aria-label="E-mail"
            className="rounded-md p-2 text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
