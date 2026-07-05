import { defineMcp } from "@lovable.dev/mcp-js";
import echoTool from "./tools/echo";
import getAratutecInfoTool from "./tools/get-aratutec-info";

export default defineMcp({
  name: "aratutec-mcp",
  title: "Aratutec MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Aratutec portfolio site. Use `get_aratutec_info` to fetch facts about the Aratutec AI API and its author Pedro Murilo Gomes. Use `echo` to verify connectivity.",
  tools: [echoTool, getAratutecInfoTool],
});