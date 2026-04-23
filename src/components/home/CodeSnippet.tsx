import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

const PYTHON_SNIPPET = `from openai import OpenAI

# Aponte o SDK da OpenAI para a Aratutec.
# Use uma chave de TESTE — rotacione antes de ir pra produção.
client = OpenAI(
    base_url="https://aratutec.org/v1",
    api_key="YOUR_API_KEY",
)

resp = client.chat.completions.create(
    model="aratutec-default",
    messages=[
        {"role": "system", "content": "Você é um assistente conciso."},
        {"role": "user", "content": "Resuma o que é a Aratutec em 1 frase."},
    ],
    stream=False,
)

print(resp.choices[0].message.content)`;

const Token = ({ kind, children }: { kind: "kw" | "str" | "com" | "fn"; children: React.ReactNode }) => {
  const cls = {
    kw: "text-code-keyword",
    str: "text-code-string",
    com: "text-code-muted italic",
    fn: "text-code-fg",
  }[kind];
  return <span className={cls}>{children}</span>;
};

const HighlightedSnippet = () => {
  // Simple visual highlighting — readable, not a real lexer.
  const lines = PYTHON_SNIPPET.split("\n");
  return (
    <pre className="overflow-x-auto p-6 text-[13px] leading-relaxed">
      <code className="font-mono text-code-fg">
        {lines.map((line, i) => {
          let rendered: React.ReactNode = line;
          if (line.trim().startsWith("#")) {
            rendered = <Token kind="com">{line}</Token>;
          } else if (line.includes("from ") || line.startsWith("from ")) {
            rendered = (
              <>
                <Token kind="kw">from</Token> openai <Token kind="kw">import</Token> OpenAI
              </>
            );
          }
          return (
            <span key={i} className="block">
              {rendered}
              {"\n"}
            </span>
          );
        })}
      </code>
    </pre>
  );
};

const CodeSnippet = () => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(PYTHON_SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section id="integrar" className="py-20 sm:py-28">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Integre em minutos
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Se você já usa a OpenAI, você já sabe usar a Aratutec.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Apontar o SDK oficial pra <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm">aratutec.org/v1</code> e
            seguir a vida. Sem dialeto novo, sem reescrever cliente.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-code-bg shadow-2xl shadow-foreground/5">
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
            <div className="flex items-center gap-2 text-xs text-code-muted">
              <Terminal className="h-3.5 w-3.5" />
              <span className="font-mono">python · quickstart.py</span>
            </div>
            <button
              type="button"
              onClick={onCopy}
              aria-label="Copiar snippet"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-code-fg transition-colors hover:bg-white/10"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-code-string" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
          <HighlightedSnippet />
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          ⚠️ Nunca exponha sua chave em frontend. <code className="font-mono">YOUR_API_KEY</code> é placeholder —
          rotacione qualquer chave usada em testes antes de subir para produção.
        </p>
      </div>
    </section>
  );
};

export default CodeSnippet;
