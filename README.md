# Tedi MCP Bridge - ACI to ElevenLabs Voice Assistant Integration

## 🎯 Project Overview

**Tedi MCP Bridge** is an innovative solution that bridges the gap between ACI.dev's unified MCP (Model Context Protocol) server and ElevenLabs' voice assistant platform. We solved a critical technical challenge: the ACI MCP server only supports STDIO/SSE communication and requires Python's uvx runtime, making it incompatible with cloud platforms like ElevenLabs which requires (HTTPS endpoints).

### The Problem

The ACI unified MCP server is a powerful tool for infrastructure management, but it has limitations:
- Only supports STDIO (standard input/output) and SSE (Server-Sent Events) communication
- Requires Python and uvx to run
- Cannot be directly exposed as HTTPS endpoints that ElevenLabs requires
- Incompatible with modern assistant platforms without additional infrastructure

### Our Solution

We created the Tedi MCP Bridge using the Mastra framework to:

1. **Protocol Translation**: Convert MCP's STDIO/SSE transport to RESTful HTTPS endpoints
2. **Enhanced Intelligence**: Add AI capabilities through Mastra's agent framework
3. **Voice Integration**: Enable natural language productivity management via ElevenLabs
4. **Cloud Deployment**: Make the ACI server deployable on any cloud platform

## 🚀 Key Features & Innovations

- **STDIO/SSE to HTTP Bridge**: Seamlessly converts ACI's STDIO/SSE MCP server to HTTPS-accessible endpoints
- **Voice Integration**: Direct integration with ElevenLabs voice assistant for natural language productivity management
- **Dual-Process Architecture**: Runs Node.js (Mastra) and Python (ACI MCP) processes with seamless communication
- **Intelligent Agents**: AI agents that understand context and can execute complex multi-step operations
- **Memory Persistence**: Maintains conversation context for sophisticated interactions
- **Workflow Automation**: Pre-built workflows for common productivity tasks
- **Universal Compatibility**: Deploy anywhere - Vercel, Fly.io, Railway
- **Multi-model LLM support**: OpenAI, Anthropic, and other LLMs
- **Extensible Foundation**: Build on top with custom workflows, agent networks, and additional MCP servers

## 🏗️ Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│ ElevenLabs Voice│────▶│   Mastra Server  │────▶│  ACI MCP Server │
│    Assistant    │HTTPS│   (Port 4111)    │STDIO│    (Python)     │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                               │
                               ▼
                    ┌─────────────────────────┐
                    │    Mastra Extensions    │
                    ├─────────────────────────┤
                    │ • Custom Agents         │
                    │ • Workflows & Networks  │
                    │ • Memory Providers      │
                    │ • Additional MCP Servers│
                    │ • Custom Tools          │
                    └─────────────────────────┘
```

## 📋 Prerequisites

- Node.js 18+ or Bun runtime
- Python 3.8+ with uvx
- ngrok (for local HTTPS tunneling)
- ACI MCP server installed
- ElevenLabs account with API access
- ACI account with API access

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/koikar/tedi-mcp.git
   cd tedi-mcp
   ```

2. **Install dependencies**
   ```bash

   # Using bun
   bun install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:
   ```env
   # LLM Configuration
   OPENAI_API_KEY=your_openai_key
   ANTHROPIC_API_KEY=your_anthropic_key

   # ACI Configuration
   ACI_API_KEY=your_aci_api_key
   ```

## 🚀 Running Locally

1. **Start the Mastra server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

2. **In a new terminal, start ngrok for HTTPS access**
   ```bash
   ngrok http 4111
   ```

3. **Configure ElevenLabs with your ngrok URL**
   - Copy the HTTPS URL from ngrok (e.g., `https://abc123.ngrok.io/mcp`)
   - Add it to your ElevenLabs voice assistant configuration
   - Use our [ElevenLabs Agent Prompt Guide](./ELEVENLABS_AGENT_PROMPT.md) for optimal voice assistant setup

See detailed deployment guides in the `/docs` folder.

## 💡 Use Cases

1. **Email Management**: "Hey, do I have any unread emails from my boss?" or "Draft a reply to Sarah's meeting request"
2. **Calendar Coordination**: "What's on my calendar today?" or "Schedule a meeting with the team next Tuesday at 2pm"
3. **Task Organization**: "Create a Notion task from that email about the project deadline"
4. **Smart Inbox Management**: "Label all newsletters as 'Read Later'" or "Archive all emails older than 30 days"

## 🌍 Impact

This bridge democratizes digital productivity by:
- Making email, calendar, and task management accessible via natural voice commands
- Reducing the time spent on routine digital organization
- Enabling hands-free productivity for busy professionals
- Bringing AI-powered assistance to everyday workflow management

## 🚀 Extensibility with Mastra

By leveraging the Mastra framework, the Tedi MCP Bridge transforms the ACI MCP server into an extensible platform. Developers can now:

### Build on Top of This Bridge
- **Add Custom Workflows**: Create complex multi-step automations that combine ACI functions with other services
- **Deploy Agent Networks**: Build teams of specialized agents that collaborate on tasks
- **Integrate Additional MCP Servers**: Connect multiple MCP servers (Slack, GitHub, etc.) alongside ACI
- **Implement Advanced Memory**: Use Mastra's memory providers (PostgreSQL, Redis, etc.) for persistent context
- **Create Custom Tools**: Extend functionality with your own tools and integrations

### Example Extensions
```typescript
// Add a custom workflow combining multiple services
const emailToProjectWorkflow = workflow()
  .step('analyze-email', analyzeEmailWithACI)
  .step('create-github-issue', createGitHubIssue)
  .step('update-notion', updateNotionProject)
  .step('notify-slack', sendSlackNotification);

// Deploy an agent network for complex tasks
const productivityNetwork = new AgentNetwork({
  emailAgent: new EmailTriageAgent(),
  calendarAgent: new SchedulingAgent(),
  taskAgent: new TaskManagementAgent()
});
```

This extensibility means you're not just getting a bridge - you're getting a foundation for building sophisticated AI-powered productivity systems.

## 🤖 Enhanced Features

### ElevenLabs Voice Assistant Configuration

We provide a comprehensive [Agent Prompt Guide](./ELEVENLABS_AGENT_PROMPT.md) that includes:
- Optimized personality and tone settings for natural conversation
- Pre-configured tool discovery patterns for Gmail, Calendar, and Notion
- Smart guardrails for privacy and confirmation workflows
- Example interaction flows and error handling

### Custom Agents

The Tedi agent enhances basic operations with intelligent understanding:

```typescript
// Example: Natural language to productivity operations
"Summarize my important emails" → Analyzes inbox and extracts key information
"Clear my calendar for tomorrow afternoon" → Manages multiple calendar operations
"Turn that email thread into a Notion project" → Orchestrates cross-app workflows
```

### Workflows

Build workflows for common operations:
- Email triage and organization
- Meeting scheduling with conflict detection
- Task extraction from emails to Notion
- Inbox zero automation

### Memory & Context

Maintain conversation context for complex multi-step operations:
- Remembers previous email searches and filters
- Tracks ongoing calendar planning
- Suggests follow-up actions based on email content
- Links related emails, events, and tasks

## 🛠️ Technologies Used

- **Mastra Framework** - AI orchestration and agent framework
- **ACI.dev Unified MCP Server** - Infrastructure management protocol
- **ElevenLabs Voice Platform** - Natural language voice interactions
- **Node.js & TypeScript** - Backend development
- **Python & uvx** - MCP server runtime
- **Docker** - Containerization for deployment
- **Cloud Platforms** - Vercel, Fly.io, Railway

## 🙏 Acknowledgments

- ACI.dev team for the unified MCP server
- ElevenLabs for voice assistant platform
- Mastra framework contributors
- Our hackathon mentors and organizers

## 📞 Support

- Documentation: [/docs](./docs)
- Issues: [GitHub Issues](https://github.com/koikar/tedi-mcp/issues)

---

Built with ❤️ for the Tech:Europe Berlin Hackathon
