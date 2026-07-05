import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_aratutec_info",
  title: "Get Aratutec info",
  description:
    "Returns key facts about Aratutec: the OpenAI-compatible AI API built and operated by Pedro Murilo Gomes, including base URL, capabilities, and links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            product: "Aratutec",
            author: "Pedro Murilo Maciel Gomes",
            role: "Software & AI Developer (mid-level)",
            api_base_url: "https://aratutec.org/v1",
            docs_url: "https://aratutec.org/docs",
            site: "https://aratutec.org",
            capabilities: [
              "OpenAI-compatible chat completions",
              "Vision (image inputs)",
              "SSE streaming",
              "Self-hosted inference",
              "Multi-tenant backend",
            ],
            infra: [
              "Cloudflare Tunnel",
              "Proxmox / Linux",
              "FastAPI backend",
              "Vue / Nuxt frontend",
              "Supabase auth & data",
            ],
            contact: {
              email: "pedrogomes600@hotmail.com",
              github: "https://github.com/PedroMMGomes",
              linkedin: "https://linkedin.com/in/pedrogomes600",
            },
          },
          null,
          2,
        ),
      },
    ],
  }),
});