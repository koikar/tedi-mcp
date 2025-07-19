import { MCPServer } from "@mastra/mcp";
import { mcpClient } from "./client";

// MCPServer exposes the ACI MCP tools over HTTP/SSE
export const tediMCPServer = new MCPServer({
  name: "ACI Unified MCP Server",
  version: "1.0.0",
  description: "HTTP/SSE bridge for ACI MCP server - exposes STDIO-based ACI tools over HTTP",
  tools: await mcpClient.getTools(), // Get all tools from the STDIO client
});
