import { MessageSquare, Eye, Zap, Code2 } from "lucide-react";

const items = [
  {
    icon: MessageSquare,
    title: "Chat completions",
    body: "POST /v1/chat/completions com mensagens estruturadas, system prompt e respostas em JSON.",
  },
  {
    icon: Eye,
    title: "Visão",
    body: "Envie imagens junto do prompt. O modelo descreve, extrai e raciocina sobre o conteúdo visual.",
  },
  {
    icon: Zap,
    title: "Streaming SSE",
    body: "Tokens em tempo real via Server-Sent Events — UX de chat fluida, sem esperar a resposta inteira.",
  },
  {
    icon: Code2,
    title: "API drop-in",
    body: "Compatível com o SDK da OpenAI. Troca a base_url e a chave — o resto do seu código continua igual.",
  },
];

const Capabilities = () => {
  return (
    <section id="capacidades" className="py-20 sm:py-28">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            O que você pode fazer
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Capacidades reais, expostas como uma API simples.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group bg-background p-6 transition-colors hover:bg-secondary/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
