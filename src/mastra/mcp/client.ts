import { MCPClient } from "@mastra/mcp";

// Configure MCPClient to connect to your server(s)
export const mcpClient = new MCPClient({
  servers: {
    tedi: {
      command: "uvx",
      args: [
        "aci-mcp@latest",
        "unified-server",
        "--linked-account-owner-id",
        "tedi",
        "--allowed-apps-only",
      ],
      env: {
        ACI_API_KEY: process.env.ACI_API_KEY!,
      },
    },
  },
});
