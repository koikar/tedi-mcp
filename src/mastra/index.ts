import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { tediAgent } from "./agents/tedi-agent";
import { tediMCPServer } from "./mcp/server";
import { tediWorkflow } from "./workflows/tedi-workflow";

export const mastra = new Mastra({
  workflows: { tediWorkflow },
  agents: { tediAgent },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
  mcpServers: {
    tedi: tediMCPServer, // Register the MCP server
  },
});
